import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import { Link } from "react-router-dom";
import "./Dishes.css";

class Dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "LOADING"
    };
  }

  componentDidMount = () => {
    this.update(this.props.type, this.props.filter);
  };

  componentWillReceiveProps = props => {
    this.update(props.type, props.filter);
  };

  update(type, filter) {
    modelInstance
      .getAllDishes(type, filter)
      .then(dishes => {
        this.setState({
          status: "LOADED",
          dishes: dishes.results
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }
  render() {
    let dishesList = null;
    switch (this.state.status) {
      case "LOADING":
        dishesList = <em>Loading cool stuff</em>;
        break;
      case "LOADED":
        dishesList = this.state.dishes.map(dish => (
          <Link to={`/dishdetails/${dish.id}`}>
            <div id="imgcont">
              <img
                id="dish_image"
                src={"http://spoonacular.com/recipeImages/" + dish.image}
                key={dish.id}
                alt="error while trying to display"
              />
              <p id="title2">{dish.title} </p>
            </div>
          </Link>
        ));
        break;
      default:
        dishesList = <b>Couldn't load properly, try again!</b>;
        break;
    }
    return (
      <div className="Dishes">
        <ul>{dishesList}</ul>
      </div>
    );
  }
}
export default Dishes;
