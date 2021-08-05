import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// local components
import AuthPage from "./components/pages/AuthPage";
import MainPage from "./components/pages/MainPage";
import ArticleDetail from "./components/pages/ArticleDetail";
import axios from "axios";

class App extends Component {
  state = {
    user: localStorage.getItem("user"),
  };

  register = async (user) => {
    const res = await axios.post(
      "https://qc5zbs.fn.thelarkcloud.com/user_register",
      user
    );
    console.log("Register...");
    console.log(res);
    if (res.data.success) {
      this.setState({ user });
      localStorage.setItem("user", user);
      return true;
    }
    return false;
  };

  login = async (user) => {
    const res = await axios.post(
      "https://qc5zbs.fn.thelarkcloud.com/user_login",
      user
    );
    console.log("Login...");
    console.log(res);
    if (res.data.success) {
      this.setState({ user });
      localStorage.setItem("user", user);
      return true;
    }
    return false;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/user-auth"
              exact
              render={(props) => (
                <AuthPage
                  {...props}
                  login={this.login}
                  register={this.register}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={(props) => <MainPage {...props} user={this.state.user} />}
            />
            <Route
              path="/:id"
              exact
              render={(props) => (
                <ArticleDetail {...props} user={this.state.user} />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
