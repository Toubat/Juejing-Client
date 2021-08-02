import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import Article from "./Article.jsx";
// apix
import { getArticleById, getArticles } from "../../fake-api";

export default function InfiniteScrollList({
  primaryCategory,
  secondaryCategory,
  sortBy,
}) {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (hasMore) {
      getArticles(primaryCategory, sortBy, offset, 20).then((res) => {
        setArticles(res.data.articles);
        setHasMore(res.has_more);
        console.log(res.data.articles);
      });
    }
  }, [primaryCategory, secondaryCategory, sortBy, offset, hasMore]);

  return (
    <Paper className="post-list" style={{ borderRadius: 0 }}>
      {articles.map((article, i) => (
        <Article key={`${article.article_id}-${i}`} article={article} />
      ))}
    </Paper>
  );
}
