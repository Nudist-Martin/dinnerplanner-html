import React, { Component } from "react";
import modelInstance from "../data/DinnerModel";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./DishDetails.css";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "INITIAL",
      dish: this.props.info.match.params.dishId,
      numberOfGuests: modelInstance.getNumberOfGuests()
    };
  }

  componentDidMount() {
    this.props.model.addObserver(this);
    modelInstance
      .getDish(this.state.dish)
      .then(newdish => {
        this.setState({
          status: "LOADED",
          dish: newdish
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }

  update() {
    this.setState({
      numberOfGuests: modelInstance.getNumberOfGuests()
    });
  }
  addToMenu = () => {
    console.log(this.state.dish);
    modelInstance.addDishToMenu(this.state.dish);
  };

  render() {
    let imgboi = null;
    let titlerino = null;
    let dish_prep = null;
    let ingredients = null;
    let finprice = null;
    switch (this.state.status) {
      case "LOADING":
        imgboi = <em>Loading image, please wait</em>;
        break;
      case "LOADED":
        imgboi = (
          <img id="detailimage" src={this.state.dish.image} alt="a pic" />
        );
        titlerino = <h3>{this.state.dish.title}</h3>;
        dish_prep = <p id="dish_prep">{this.state.dish.instructions}</p>;
        ingredients = this.state.dish.extendedIngredients.map(ing => (
          <div>
            <p>
              {Math.round(
                ing.measures.metric.amount * this.state.numberOfGuests
              )}
              {ing.measures.metric.unitShort} {ing.originalName}
            </p>

            <div>{this.state.numberOfGuests} SEK</div>
          </div>
        ));
        finprice = Math.round(
          this.state.dish.pricePerServing * this.state.numberOfGuests
        );
        break;
      default:
        imgboi = <b>Couldn't load properly, try again, please!</b>;
        break;
    }
    return (
      <div class="row">
        <div id="row">
          <div className="Sidebardetail">
            <Sidebar model={this.props.model} />
          </div>

          <div id="DishDetails">
            <h3 id="title">{titlerino}</h3>
            <ul>{imgboi}</ul>
            <p>{dish_prep}</p>
            <Link to="/search">
              <button>Return</button>
            </Link>
          </div>
          <div id="ingredientscreen">
            <h4>Ingredients for {this.state.numberOfGuests} guests: </h4>
            {ingredients}
            <div id="finprice">Totalprice: {finprice} SEK</div>
            <Link to="/search">
              <button onClick={this.addToMenu}>Add dish to your menu</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default DishDetails;
