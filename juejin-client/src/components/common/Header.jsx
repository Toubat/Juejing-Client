import React from "react";
import clsx from "clsx";

export default function Header({ logout, trigger, history, user, showUser }) {
  return (
    <header className={clsx("main-header", !trigger && "sticky")}>
      <div className="header-logo" onClick={() => history.push("/")}>
        <img
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg"
          alt="掘金标志"
        />
        <h2 style={{ textAlign: "center", margin: 0, marginLeft: "0.8rem" }}>
          掘金
        </h2>
      </div>
      {user && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="header-logout" onClick={logout}>
            退出
          </button>
          <div className="header-avatar">
            <h3 className="avatar">{user[0]}</h3>
          </div>
        </div>
      )}
      {!user && showUser && (
        <button
          className="header-login-button"
          onClick={() => history.push("/user-auth")}
        >
          登录/注册
        </button>
      )}
    </header>
  );
}
