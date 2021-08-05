import React, { useState, useRef, useCallback, useEffect } from "react";
import { Paper } from "@material-ui/core";
import Article from "./Article.jsx";
// api
import { getArticles } from "../../fake-api";

const loadAmount = 30;

export default function InfiniteScrollList({
  primaryCategory = 0,
  secondaryCategory,
  sortBy,
  history,
}) {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    setArticles([]);
    setOffset(0);
    setHasMore(true);
    setLoading(false);
  }, [primaryCategory, secondaryCategory, sortBy]);

  const lastArticleElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoading(true);
          setTimeout(() => {
            getArticles(primaryCategory, sortBy, offset, loadAmount)
              .then((res) => {
                // console.log(`Offset: ${offset}, sortBy: ${sortBy}`);
                setArticles((articles) => [...articles, ...res.data.articles]);
                setHasMore(res.has_more);
                setOffset((offset) => offset + loadAmount);
                setLoading(false);
              })
              .catch((e) => {
                setLoading(false);
              });
          }, 1000);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, sortBy, offset]
  );

  const getFilteredArticles = (articles) => {
    if (primaryCategory === 0) return articles;
    return articles.filter(
      (article) =>
        article.category_info.second_category_id === secondaryCategory
    );
  };

  return (
    <React.Fragment>
      <Paper className="post-list" style={{ borderRadius: 0 }}>
        {getFilteredArticles(articles).map((article, i) => (
          <Article
            key={`$article-${i}`}
            article={article}
            loading={false}
            history={history}
          />
        ))}
        {hasMore && (
          <Article article={null} loading={true} ref={lastArticleElementRef} />
        )}
      </Paper>
    </React.Fragment>
  );
}
