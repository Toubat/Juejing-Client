import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// local components
import MainPage from "./components/pages/MainPage";
import ArticleDetail from "./components/pages/ArticleDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact render={(props) => <MainPage {...props} />} />
            <Route
              path="/:id"
              exact
              render={(props) => <ArticleDetail {...props} />}
            />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
