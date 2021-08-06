import React, { useState, useRef, useCallback, useEffect } from "react";
import { Paper } from "@material-ui/core";
import Article from "./Article.jsx";
// api
import { getArticles, getArticleById } from "../../fake-api";
import axios from "axios";
// icon
import EmptyIcon from "@material-ui/icons/HourglassEmptyOutlined";

const loadAmount = 30;

export default function InfiniteScrollList({
  primaryCategory = 0,
  secondaryCategory,
  sortBy,
  history,
  user,
}) {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const isHistoryPage = sortBy === "history";

  useEffect(() => {
    setArticles([]);
    setOffset(0);
    setHasMore(true);
    setLoading(false);
  }, [primaryCategory, secondaryCategory, sortBy, user]);

  useEffect(() => {
    if (user && sortBy === "history") {
      const loadArticles = async () => {
        const ids = await loadHistoryRecords(user);
        const historyArticles = [];
        for (let id of ids) {
          const res = await getArticleById(id);
          if (res.code === 0) {
            historyArticles.push(res.data.article);
          }
        }

        setArticles(historyArticles);
      };
      loadArticles();
    }
  }, [sortBy]);

  const loadHistoryRecords = async (user) => {
    const res = await axios.post(
      "https://qc5zbs.fn.thelarkcloud.com/load_history_records",
      {
        user_name: user,
      }
    );
    return res.data.history_records;
  };

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
      <Paper
        className="post-list"
        style={{
          borderRadius: 0,
          minHeight: isHistoryPage ? "calc(100vh - 140px)" : undefined,
          marginTop: isHistoryPage ? 10 : undefined,
        }}
      >
        {!isHistoryPage && (
          <React.Fragment>
            {getFilteredArticles(articles).map((article, i) => (
              <Article
                key={`$article-${i}`}
                article={article}
                loading={false}
                history={history}
                user={user}
              />
            ))}
            {hasMore && (
              <Article
                article={null}
                loading={true}
                ref={lastArticleElementRef}
                user={user}
              />
            )}
          </React.Fragment>
        )}
        {isHistoryPage && (
          <React.Fragment>
            {articles.map((article, i) => (
              <Article
                key={`$article-${i}`}
                article={article}
                loading={false}
                history={history}
                user={user}
              />
            ))}
            {articles.length === 0 && (
              <div className="list-empty">
                <EmptyIcon
                  style={{
                    fontSize: "5rem",
                    color: "var(--dark-color)",
                  }}
                />
                <div>历史记录为空</div>
                {!user && (
                  <div style={{ paddingTop: 20 }}>请登录后查看历史记录</div>
                )}
              </div>
            )}
          </React.Fragment>
        )}
      </Paper>
    </React.Fragment>
  );
}
