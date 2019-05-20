import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div id="header" className="Welcome">
        <p>Welcome to BEEG Yoshi's Dinnerplanner, a tasty application!</p>

        <Link to="/search">
          <button>Go on an adventure</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
