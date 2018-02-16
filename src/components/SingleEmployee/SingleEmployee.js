import React, { Component } from "react";
import Image from "./image.png";

import "./SingleEmployee.css";

class SingleEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeArray: [{}, {}, {}, {}, {}, {}, {}]
    };
  }

  render() {
    return (
      <div className="container-fluid total">
        <div className="row initial-row">
          <div className="col-1" />
          <div className="col-11">
            <h3 className="title mb-0">CVcitos</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-1" />
          <div className="col-11 showcase">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                />
              </div>
              <div className="col-3 text-center">
                <button className="btn">Ver CV</button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-9">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Projects
                    </a>
                  </li>
                </ul>
                <div className="row mt-4">
                  <div className="col-4">
                    <img className="" src={Image} alt="foto imagen" />
                  </div>
                  <div className="col-8">
                    <h5 className="sub-title-cv poppins">SUMMARY</h5>
                    <textarea
                      name=""
                      id=""
                      cols="5"
                      rows="5"
                      className="form-control summaryText"
                      placeholder="Write a summary here..."
                    />

                    <h5 className="poppins">Tekton Labs</h5>
                    <input
                      type="text"
                      className="inputText"
                      placeholder="Cargo..."
                    />
                    <p>Team Leader</p>

                    <h5 className="sub-title-cv poppins mayus">
                      Certifications
                    </h5>
                    <input type="text" />
                    <p>Certified Scrum Course</p>

                    <h5 className="sub-title-cv poppins mayus">Strengths</h5>
                    <input type="text" />
                    <p>Leader</p>
                    <p>Innovation</p>
                    <p>Research</p>

                    <h5 className="sub-title-cv poppins mayus">
                      Areas of interest
                    </h5>
                    <p>Patterns and design</p>
                    <p>High Perfomance</p>
                    <p>Apps</p>
                    <p>Google Glass</p>

                    <button className="btn">Save</button>
                  </div>
                </div>
              </div>
              <div className="col-3 text-center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEmployee;
