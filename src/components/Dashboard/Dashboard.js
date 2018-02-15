import React, { Component } from "react";

import "./Dashboard.css";

import Employee from "./Employee";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeArray: [{}, {}, {}, {}, {}, {}, {}]
    };
  }

  renderEmployees() {
    return (
      <div className="row mb-4">
        {this.state.employeeArray.map((employee, id) => {
          if (id % 6 === 0) return <div key={id} className="w-100 mb-4" />;
          return <Employee key={id} employee={employee} />;
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid total">
        <div className="row">
          <div className="col-1" />
          <div className="col-11 filter mt-25">
            <div className="row mb-4">
              <div className="col-4">Area</div>
              <div className="col-4">Puesto</div>
              <div className="col-4">Update</div>
            </div>
            <div className="row">
              <div className="col-8">Knowledge</div>
              <div className="col-4">Years</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-11 showcase">{this.renderEmployees()}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
