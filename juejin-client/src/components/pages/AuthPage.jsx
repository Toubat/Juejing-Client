import React, { useState } from "react";
import Header from "../common/Header";

export default function AuthPage({ history, login, register, logout }) {
  const [selectLogin, setSelectLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleAuthAction = async (e) => {
    e.preventDefault();
    if (selectLogin) {
      const loginSuccess = await login({
        user_name: userName,
        password: password,
      });
      if (loginSuccess) {
        history.push("/");
      } else {
        alert("登录失败 - 用户名或密码错误");
      }
    } else {
      const registerSuccess = await register({
        user_name: userName,
        password: password,
      });
      if (registerSuccess) {
        history.push("/");
      } else {
        alert("注册失败 - 该用户已存在");
      }
    }
  };

  return (
    <React.Fragment>
      <Header
        history={history}
        trigger={false}
        user={null}
        showUser={false}
        logout={logout}
      />
      <div className="auth-background">
        <div className="auth-window">
          <div className="auth-icon">
            <img
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg"
              alt="掘金标志"
              className="auth-icon-symbol"
            />
            <div className="auth-icon-name">
              <h2>掘金</h2>
            </div>
          </div>
          <div className="auth-form">
            <h5 style={{ fontSize: "1.4rem", margin: 0, marginBottom: 20 }}>
              {selectLogin ? "登录" : "注册"}
            </h5>
            {selectLogin ? (
              <div className="auth-login">
                <div className="auth-input-container">
                  <label>用户名</label>
                  <input
                    type="text"
                    placeholder="用户名"
                    className="auth-input"
                    value={userName}
                    onChange={(e) => setUserName(e.currentTarget.value)}
                  />
                </div>
                <div className="auth-input-container">
                  <label>密码</label>
                  <input
                    type="password"
                    placeholder="密码"
                    className="auth-input"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>
              </div>
            ) : (
              <div className="auth-register">
                <div className="auth-input-container">
                  <label>用户名</label>
                  <input
                    type="text"
                    placeholder="用户名"
                    className="auth-input"
                    value={userName}
                    onChange={(e) => setUserName(e.currentTarget.value)}
                  />
                </div>
                <div className="auth-input-container">
                  <label>密码</label>
                  <input
                    type="password"
                    placeholder="密码"
                    className="auth-input"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>
                <div className="auth-input-container">
                  <label>确认密码</label>
                  <input
                    type="password"
                    placeholder="确认密码"
                    className="auth-input"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.currentTarget.value)}
                  />
                  {password.length !== 0 &&
                    rePassword.length !== 0 &&
                    password !== rePassword && (
                      <div style={{ paddingTop: 10, color: "red" }}>
                        与之前密码不一致
                      </div>
                    )}
                </div>
              </div>
            )}
            <div className="auth-divider"></div>
            <button
              className="auth-button"
              onClick={(e) => handleAuthAction(e)}
              disabled={
                userName.length === 0 ||
                password.length === 0 ||
                (selectLogin
                  ? false
                  : rePassword.length === 0 || password !== rePassword)
              }
            >
              {selectLogin ? "登录" : "注册"}
            </button>
            <div
              className="auth-switch"
              onClick={() => setSelectLogin(!selectLogin)}
            >
              {selectLogin ? "新用户 - 点击注册" : "已注册账号 - 点击登录"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
