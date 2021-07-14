import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// local components
import MainPage from "./components/pages/MainPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
