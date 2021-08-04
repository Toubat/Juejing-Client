import React from "react";
import clsx from "clsx";

export default function Header({ trigger, history }) {
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
      <div className="header-avatar">
        <div className="avatar">BY</div>
      </div>
    </header>
  );
}
