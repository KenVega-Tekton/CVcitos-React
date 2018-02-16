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
              <div className="col-4">
                <div className="form-group row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-3 col-form-label"
                  >
                    Área
                  </label>
                  <div className="col-9 pl-0">
                    <select
                      className="form-control form-control-sm"
                      id="exampleFormControlSelect1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-3 col-form-label"
                  >
                    Puesto
                  </label>
                  <div className="col-9">
                    <select
                      className="form-control form-control-sm"
                      id="exampleFormControlSelect1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-3 col-form-label"
                  >
                    Update
                  </label>
                  <div className="col-9">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="form-group row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-2 col-form-label"
                  >
                    Knowledge
                  </label>
                  <div className="col-10">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-3 col-form-label"
                  >
                    Years
                  </label>
                  <div className="col-3 pl-0">
                    <input type="text" className="form-control" id="e" />
                  </div>
                  <label className="col-1 col-form-label p-0">-</label>
                  <div className="col-3 pl-0">
                    <input type="text" className="form-control" id="d" />
                  </div>
                </div>
              </div>
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
