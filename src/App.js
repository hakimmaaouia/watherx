import React from "react";
import Home from "./Component/Home";
import Search from "./Component/search";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Search} />
        <Route
          path={process.env.PUBLIC_URL + "/Home/"}
          exact
          component={Home}
        />
      </Router>
    );
  }
}

export default App;
