import React, { useState, useEffect } from "react";
import { useScrollTrigger } from "@material-ui/core";
import Header from "../common/Header";
import Article from "../common/Article";
import Comment from "../common/Comment";
// api
import { getArticleById } from "../../fake-api";

const triggerHeight = 200;

export default function ArticleDetail({ history, match }) {
  const [article, setArticle] = useState(null);

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    disableHysteresis: true,
    threshold: triggerHeight,
  });

  useEffect(() => {
    getArticleById(match.params.id).then((res) => {
      setArticle(res.data.article);
      console.log(res.data.article);
    });
  }, []);

  const unixTimeToDate = (time) => {
    const publishTime = new Date(parseInt(time) * 1000);

    const year = publishTime.getYear();
    const month = publishTime.getMonth().toString().padStart(2, "0");
    const day = publishTime.getDay().toString().padStart(2, "0");

    return `${year}年${month}月${day}日`;
  };

  const LevelBadge = ({ level }) => (
    <div className="article-detail-level">Lv. {level}</div>
  );

  const ArticleHeader = ({ article }) => (
    <div className="article-detail-header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          overflowX: "scroll",
          height: 65,
        }}
      >
        <div className="article-detail-avatar">
          <img
            src={article.author_user_info.avatar_large}
            alt="头像"
            style={{ height: 40, width: 40, borderRadius: "50%" }}
          />
        </div>
        <div className="article-detail-info">
          <div className="article-detail-user">
            <div
              className="article-detail-username"
              style={{ fontWeight: 500 }}
            >
              {article.author_user_info.user_name}
            </div>
            <LevelBadge level={article.author_user_info.level} />
          </div>
          <div className="article-detail-time-read">
            <span style={{ paddingRight: 10 }}>
              {unixTimeToDate(article.article_info.ctime)}
            </span>
            <span>{`阅读 ${article.article_info.view_count}`}</span>
          </div>
        </div>
      </div>
      <div>
        <button className="article-detail-subscribe">关注</button>
      </div>
    </div>
  );

  const ArticleCoverImage = ({ article }) => (
    <div className="article-detail-cover-image">
      <img
        src={article.article_info.cover_image}
        alt={article.article_info.title}
        style={{ width: "100%" }}
      />
    </div>
  );

  const ArticleContent = ({ article }) => (
    <div className="article-detail-content">
      <td dangerouslySetInnerHTML={{ __html: article.article_content }} />
    </div>
  );

  if (article === null) return <Article article={null} />;
  return (
    <React.Fragment>
      <Header trigger={trigger} history={history} />
      <div className="article-detail-background">
        <div className="article-detail-container">
          <ArticleHeader article={article} />
          <ArticleCoverImage article={article} />
          <ArticleContent article={article} />
          <Comment article={article} />
        </div>
      </div>
    </React.Fragment>
  );
}
