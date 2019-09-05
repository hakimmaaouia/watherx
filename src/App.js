import React from 'react';
import Home from './Component/Home'
import Search from './Component/search'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends  React.Component {
  

  
  render() { 
return( 
  <Router>
  <Route path="/" exact component={Home} />
  <Route path="/Search/"  component={Search} />
  </Router>
 );
  }
}
 


export default App;
