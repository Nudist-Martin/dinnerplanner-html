import ObservableModel from "./ObservableModel";

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/72";
const httpOptions = {
  headers: {
    "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
  }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this._numberOfGuests = 1;
    this.getNumberOfGuests();
    this.menu = [];
    if (localStorage.getItem("menu")) {
      this.menu = JSON.parse(localStorage.getItem("menu"));
    }
  }

  /**
   * @returns {number}
   */
  getNumberOfGuests() {
    return localStorage.getItem("numberOfGuests");
  }

  /**
   * @param {number} num
   */
  setNumberOfGuests(num) {
    if (num < 1) {
      this._numberOfGuests = 1;
      localStorage.setItem("numberOfGuests", this._numberOfGuests);
      this.notifyObservers();
    } else {
      this._numberOfGuests = num;
      localStorage.setItem("numberOfGuests", this._numberOfGuests);
      this.notifyObservers();
    }
  }

  addDishToMenu(new_dish) {
    for (let disherino of this.menu) {
      if (disherino.id === new_dish.id) {
        this.menu.splice(this.menu.indexOf(disherino), 1);
      }
    }
    this.menu.push(new_dish);
    localStorage.setItem("menu", JSON.stringify(this.menu));
    this.notifyObservers();
  }

  altAddDishToMenu(dish) {
    this.menu.push(dish);
    if (typeof Storage !== "undefined") {
      localStorage.setItem("menu", JSON.stringify(this.menu));
    }
    this.notifyObservers();
  }
  /**
   * @returns {Promise<any>}
   */
  getAllDishes(type, filter) {
    if (filter === null) {
      const url = `${BASE_URL}/recipes/search?type=${type}`;
      return fetch(url, httpOptions).then(this.processResponse);
    } else {
      const url = `${BASE_URL}/recipes/search?type=${type}&query=${filter}`;

      return fetch(url, httpOptions).then(this.processResponse);
    }
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }

  getFullMenu() {
    return this.menu;
  }

  getDish(id) {
    const url = `${BASE_URL}/recipes/${id}/information?includeNutrition=false`;
    return fetch(url, httpOptions).then(this.processResponse);
  }
}
const modelInstance = new DinnerModel();
export default modelInstance;
