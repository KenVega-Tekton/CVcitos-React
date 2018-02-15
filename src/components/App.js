import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"; // to navigate the dom
import "./App.css";

import Dashboard from "./Dashboard/Dashboard";

const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/land" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
