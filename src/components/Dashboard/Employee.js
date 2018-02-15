import React, { Component } from "react";
import Image from "./joca.png";

class Employee extends Component {
  render() {
    return (
      <div className="col">
        <div className="card border-0">
          <div className="card-header p-0">
            <img
              className="image-card card-img-top"
              src={Image}
              alt="Foto de joca"
            />
          </div>
          <div className="card-body">
            <p>Joquita Pereyra León</p>
            <p>PHP</p>
            <p>Tech Leader</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
