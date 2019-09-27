import React from "react";
import Home from "./Component/Home";
import Search from "./Component/search";
import { HashRouter as Router, Route } from "react-router-dom";
import "./card.css";
class App extends React.Component {
  render() {
    return (
      <div className="card">
      <Router>
        <Route path="/" exact component={Search} />
        <Route
          path="/Home"
          component={Home}
        />
      </Router>
</div>
    );
  }
}

export default App;
