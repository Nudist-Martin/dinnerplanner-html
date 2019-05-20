import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SelectDish/SelectDish";
import "./App.css";
import DishDetails from "./DishDetails/DishDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "BEEG Yoshi's Dinnerplanner"
    };
  }

  render() {
    return (
      <div className="Application">
        <header className="Heady">
          <h1 className="title">{this.state.title}</h1>
          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome} />
          <Route
            path="/search"
            render={() => <SelectDish model={modelInstance} />}
          />
          <Route
            path="/DishDetails/:dishId"
            render={props => <DishDetails info={props} model={modelInstance} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
