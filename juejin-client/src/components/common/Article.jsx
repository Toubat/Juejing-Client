import React, { forwardRef } from "react";
// icon
import ViewIcon from "@material-ui/icons/Visibility";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineRounded";

function Article({ article, loading }, ref) {
  const unixTimeToDate = () => {
    const publishTime = new Date(parseInt(article.article_info.ctime) * 1000);
    const currTime = new Date(Math.round(Date.now()));

    const year = currTime.getYear() - publishTime.getYear();
    const month = currTime.getMonth() - publishTime.getMonth();
    const day = currTime.getDay() - publishTime.getDay();
    const hour = currTime.getHours() - publishTime.getHours();
    const min = currTime.getMinutes() - publishTime.getMinutes();
    const sec = currTime.getSeconds() - publishTime.getSeconds();
    // console.log(date);
    if (year && year !== 0) return `${year} year ago`;
    if (month && month !== 0) return `${month} month ago`;
    if (day && day !== 0) return `${day} day ago`;
    if (hour && hour !== 0) return `${hour} hour ago`;
    if (min && min !== 0) return `${min} minute ago`;
    return `${sec} seconds ago`;
  };

  const getCombinedCategory = () => {
    const firstCategory = article.category_info.first_category_name;
    const secondCategory = article.category_info.second_category_name;

    return `${firstCategory} ∙ ${secondCategory}`;
  };

  const LoadingBlock = ({ width, height }) => (
    <div
      className="loading-block"
      style={{
        width: width ? width : undefined,
        height: height ? height : undefined,
      }}
    ></div>
  );

  if (loading) {
    return (
      <div className="article-container">
        <div className="article-status">
          <div className="article-status-item dark" style={{ paddingLeft: 0 }}>
            <LoadingBlock width={"4rem"} />
          </div>
          <div className="article-status-item">
            <LoadingBlock width={"4rem"} />
          </div>
          <div className="article-status-item" style={{ borderRight: "none" }}>
            <LoadingBlock width={"4rem"} />
          </div>
        </div>
        <div className="article-info">
          <div className="article-content">
            <div className="article-header" style={{ width: "inherit" }}>
              <LoadingBlock />
            </div>
            <div className="article-brief" style={{ width: "inherit" }}>
              <LoadingBlock />
            </div>
            <div className="article-footer">
              <div className="article-footer-container">
                <LoadingBlock width={"10rem"} />
              </div>
            </div>
          </div>
          <div className="article-image">
            <LoadingBlock width={120} height={80} />
          </div>
        </div>
        <div className="article-divider" ref={ref}></div>
      </div>
    );
  }

  return (
    <div className="article-container">
      <div className="article-status">
        <div className="article-status-item dark" style={{ paddingLeft: 0 }}>
          {article.author_user_info.user_name}
        </div>
        <div className="article-status-item">
          {unixTimeToDate(article.article_info.ctime)}
        </div>
        <div className="article-status-item" style={{ borderRight: "none" }}>
          {getCombinedCategory()}
        </div>
      </div>
      <div className="article-info">
        <div className="article-content">
          <div className="article-header" style={{ width: "inherit" }}>
            {article.article_info.title}
          </div>
          <div className="article-brief" style={{ width: "inherit" }}>
            {article.article_info.brief_content}
          </div>
          <div className="article-footer">
            <div className="article-footer-container">
              <div className="aticle-icon-text">
                <ViewIcon style={{ fontSize: "1.1rem", paddingRight: 5 }} />
                {article.article_info.view_count}
              </div>
              <div className="aticle-icon-text">
                <ThumbUpIcon style={{ fontSize: "1.1rem", paddingRight: 5 }} />
                {article.article_info.digg_count}
              </div>
              <div className="aticle-icon-text">
                <CommentIcon style={{ fontSize: "1.1rem", paddingRight: 5 }} />
                {"评论"}
              </div>
            </div>
          </div>
        </div>
        <div className="article-image">
          <img
            src={article.article_info.cover_image}
            style={{ height: 80, width: 120, objectFit: "cover" }}
            alt={article.article_info.title}
          />
        </div>
      </div>
      <div className="article-divider"></div>
    </div>
  );
}

const ForwardArticle = forwardRef(Article);

export default ForwardArticle;
