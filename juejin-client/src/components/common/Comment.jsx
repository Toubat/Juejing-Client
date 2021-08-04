import React, { useState, useEffect, useRef } from "react";
// api
import { getCommentsByArticleId } from "../../fake-api";

export default function Comment({ article }) {
  const [comments, setCommets] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(article.article_id, 0, 10).then((res) => {
      setCommets(res.data.comments);
      console.log(res);
    });
  }, []);

  const CommentBox = () => (
    <div className="comment-box">
      <input
        id="comment-input"
        type="text"
        placeholder="输入评论..."
        className="comment-input"
        focused={inputFocus}
        onFocus={(e) => {
          setInputFocus(true);
        }}
        onBlur={(e) => setInputFocus(false)}
        style={{
          borderColor: inputFocus ? "#1e90ff" : undefined,
          boxShadow: inputFocus ? "0 0 0px 3px #99ccff" : undefined,
        }}
      />
      <div
        className="comment-buttons"
        style={{ display: inputFocus ? undefined : "none" }}
      >
        <button>评论</button>
      </div>
    </div>
  );

  return (
    <div style={{ margin: "20px 20px 20px 20px" }}>
      <CommentBox />
      <div style={{ height: 500 }}></div>
    </div>
  );
}
