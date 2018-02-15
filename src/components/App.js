import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"; // to navigate the dom

const Header = () => <h2>header</h2>;
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/dash" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
