import React, { Component } from "react";
import "./Searchbar.css";

class SearchBar extends Component {
  filterchange = e => {
    this.props.whenSearch(
      this.refs.typeinput.value,
      this.refs.filterinput.value
    );
  };
  typechange = e => {
    this.props.whenSearch(
      this.refs.typeinput.value,
      this.refs.filterinput.value
    );
  };

  render() {
    return (
      <div id="Searchead">
        <h2>Search for your favorite dish!</h2>
        <div id="input">
          <select ref="typeinput" onChange={this.typechange}>
            <option value="all">all</option>
            <option value="appetizer">appetizer</option>
            <option value="main course">main course</option>
            <option value="dessert">dessert</option>
            <option value="salad">salad</option>
            <option value="side dish">side dish</option>
            <option value="soup">soup</option>
            <option value="sauce">sauce</option>
            <option value="bread">bread</option>
            <option value="breakfast">breakfast</option>
            <option value="beverage">beverage</option>
            <option value="drink">drink</option>
          </select>
        </div>
        <div id="input">
          <input ref="filterinput" onChange={this.filterchange} />
        </div>
      </div>
    );
  }
}
export default SearchBar;
