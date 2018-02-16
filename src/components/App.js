import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"; // to navigate the dom
import "./App.css";

import Dashboard from "./Dashboard/Dashboard";
import SingleEmployee from "./SingleEmployee/SingleEmployee";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/joca" component={SingleEmployee} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
