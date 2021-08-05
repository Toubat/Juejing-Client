import React, { useState, useEffect, useRef, useCallback } from "react";
import LoadingBlock from "./LoadingBlock";
// api
import { getCommentsByArticleId } from "../../fake-api";
import ThumbUpIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineRounded";

export default function Comment({ article }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const unixTimeToDate = (time) => {
    const publishTime = new Date(parseInt(time) * 1000);
    const currTime = new Date(Math.round(Date.now()));

    const year = currTime.getYear() - publishTime.getYear();
    const month = currTime.getMonth() - publishTime.getMonth();
    const day = currTime.getDay() - publishTime.getDay();
    const hour = currTime.getHours() - publishTime.getHours();
    const min = currTime.getMinutes() - publishTime.getMinutes();
    const sec = currTime.getSeconds() - publishTime.getSeconds();
    // console.log(date);
    if (year && year !== 0) return `${year}年前`;
    if (month && month !== 0) return `${month}月前`;
    if (day && day !== 0) return `${day}天前`;
    if (hour && hour !== 0) return `${hour}小时前`;
    if (min && min !== 0) return `${min}分前`;
    return `${sec}秒前`;
  };

  const lastCommentElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoading(true);
          setTimeout(() => {
            getCommentsByArticleId(article.article_id, offset, 10)
              .then((res) => {
                setComments((comments) => [...comments, ...res.data.comments]);
                setHasMore(res.has_more);
                setOffset((offset) => offset + 10);
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
    [loading, hasMore]
  );

  const CommentThread = ({ comment, mainThread, last }) => {
    if (comment) {
      const replyComments = mainThread ? comment.reply_infos : [];
      const info = mainThread ? comment.comment_info : comment.reply_info;
      return (
        <React.Fragment>
          <div className="comment-container">
            <div className="comment-avatar">
              <img
                src={comment.user_info.avatar_large}
                alt={comment.user_info.user_name}
                style={{ width: 32, height: 32, borderRadius: "50%" }}
              />
            </div>
            <div className="comment-threads">
              <div className="comment-header">
                <span>{comment.user_info.user_name}</span>
                <span className="article-detail-level">{`Lv. ${comment.user_info.level}`}</span>
                <span className="comment-light">
                  {comment.user_info.job_title}
                </span>
              </div>
              <div className="comment-content">
                <div>
                  {mainThread ? info.comment_content : info.reply_content}
                </div>
              </div>
              <div className="comment-actions">
                <div className="comment-date">{unixTimeToDate(info.ctime)}</div>
                <div className="comment-thumb-reply">
                  <div className="comment-icon">
                    <ThumbUpIcon
                      style={{ fontSize: "0.9rem", paddingRight: "0.5rem" }}
                    />
                    {info.digg_count}
                  </div>
                  <span style={{ width: "1.7rem" }}></span>
                  <div className="comment-icon">
                    <CommentIcon
                      style={{ fontSize: "0.9rem", paddingRight: "0.5rem" }}
                    />
                    {"回复"}
                  </div>
                </div>
              </div>
              {replyComments.length > 0 && (
                <div className="comment-reply">
                  {replyComments.map((comment, i) => (
                    <CommentThread
                      key={`${comment.reply_id}-${i}`}
                      comment={comment}
                      mainThread={false}
                      last={i === replyComments.length - 1}
                    />
                  ))}
                </div>
              )}
              {last ? (
                <div style={{ paddingBottom: 15 }}></div>
              ) : (
                <div className="comment-divider"></div>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="comment-container">
            <div className="comment-avatar">
              <LoadingBlock width={32} height={32} radius={"50%"} />
            </div>
            <div className="comment-threads">
              <div className="comment-header">
                <LoadingBlock width={150} />
              </div>
              <div className="comment-content">
                <div>
                  <LoadingBlock width={"100%"} />
                </div>
              </div>
              <div className="comment-actions">
                <LoadingBlock width={"100%"} />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <div className="comment-box">
        <input
          type="text"
          placeholder="输入评论..."
          className="comment-input"
          onFocus={(e) => {
            setInputFocus(true);
          }}
          onBlur={(e) => setInputFocus(false)}
          value={comment}
          onChange={(e) => {
            e.preventDefault();
            setComment(e.currentTarget.value);
          }}
        />
        <div
          className="comment-buttons"
          style={{ display: inputFocus ? undefined : "none" }}
        >
          <button disabled={comment.length === 0}>评论</button>
        </div>
      </div>
      <div className="comment-comments">
        <React.Fragment>
          {comments.map((comment, i) => (
            <CommentThread
              key={`${comment.comment_id}-${i}`}
              comment={comment}
              mainThread={true}
            />
          ))}
          {hasMore && <CommentThread comment={null} />}
          {hasMore && <div ref={lastCommentElementRef}></div>}
        </React.Fragment>
      </div>
    </div>
  );
}
