import React, { Component } from "react";
import "./Sidebar.css";
import modelInstance from "../data/DinnerModel";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    };
  }

  componentDidMount() {
    this.props.model.addObserver(this);
  }

  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  onNumberOfGuestsChanged = e => {
    this.props.model.setNumberOfGuests(+e.target.value);
  };

  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    });
  }

  render() {
    return (
      <div id="Sidebar">
        <h3>BEEG Yoshi's dinner</h3>
        <p>
          People:
          <input
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.onNumberOfGuestsChanged}
          />
          <br />
          <br />
          Total number of guests: {this.state.numberOfGuests}
        </p>
        <div>
          {" "}
          Menu:{" "}
          {modelInstance.getFullMenu().map(dish => (
            <p> {dish.title}</p>
          ))}
        </div>
      </div>
    );
  }
}
export default Sidebar;
