var DinnerModel = function() {
  var guestNum = 1;
  var sumting;
  var modId = "1";
  var customerMenu = [];
  this.dishID = "";

  var observers = [];
  this.addObserver = function(observer) {
    observers.push(observer);
  };

  var notifyObservers = function(changeDetails) {
    for (var i = 0; i < observers.length; i++) {
      observers[i](changeDetails);
    }
  };

  this.setGuestNum = function(num) {
    guestNum += num;
    if (guestNum < 1) {
      guestNum = 1;
    }
    notifyObservers("setGuestNum");
  };

  this.getGuestNum = function() {
    return guestNum;
  };

  this.setSelectedDish = function(id) {
    this.dishID = id;
    notifyObservers("change");
  };
  //Returns the dish that is on the menu for selected type
  this.getSelectedDish = function() {
    return this.getRecipeIngredients(this.dishID);
  };

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return dishMenu;
  };

  this.setSearchValue = function(searchResult) {
    sumting = searchResult;
    notifyObservers("searched");
  };

  this.getSearchValue = function() {
    return sumting;
  };

  this.setCustomerMenu = function(id) {
    for (dish in dishMenu) {
      if (dishMenu[dish].id === id) {
        customerMenu.push(dishMenu[dish]);
      }
    }
  };

  this.getCustomerMenu = function() {
    return customerMenu;
  };

  //Returns all ingredients for all the dishes on the menu. BYT UT ID MOT NÅGOT ANNAT
  this.getRecipeIngredients = function(id) {
    return fetch(
      "http://sunset.nada.kth.se:8080/iprog/group/72/recipes/" +
        id +
        "/information",
      {
        headers: {
          "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
        }
      }
    ).then(response => response.json());
  };

  //Returns the total price of the dish (all the ingredients multiplied by number of guests).
  this.getTotalDishPrice = function(id) {
    var totalDishPrice = 0;
    var people = this.getGuestNum();
    if (id != undefined) {
      var dishIngredientz = dishMenu.find(x => x.id === id).ingredients;

      for (key in dishIngredientz) {
        totalDishPrice += dishIngredientz[key].price * people;
      }
      return totalDishPrice;
    }
  };
  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var totalPrice = 0;
    var people = this.getGuestNum();
    var ingredientList = this.getAllIngredients();
    for (key in ingredientList) {
      var listiboi = ingredientList[key];
      for (i in listiboi) {
        var ingr = listiboi[i];
        totalPrice += ingr.price * people;
      }
    }
    return totalPrice;
  };
  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
    var newDish = this.getDish(id);
    var oldDish = this.getSelectedDish(newDish.type);
    if (oldDish.type === newDish.type) {
      removeDishFromMenu(oldDish.id);
    }
    dishMenu.push(newDish);
    notifyObservers("Sauce");
  };
  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    var idx = dishMenu.findIndex(x => x.id === id);
    delete dishMenu[idx];
  };

  /*this.getAllDishes = function(type,filter) {
		if (type === "All"){
			return dishMenu;
		}
	  return dishMenu.filter(function(dish) {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)	{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });
	}*/

  this.getAllDishes = function(type, filter) {
    return fetch(
      "http://sunset.nada.kth.se:8080/iprog/group/72/recipes/search?query=" +
        filter +
        "&type=" +
        type +
        "&number=10",
      {
        headers: {
          "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
        }
      }
    )
      .then(response => response.json())
      .then(data => data.results);
  };

  //function that returns a dish of specific ID
  this.getDish = function(id) {
    for (key in dishMenu) {
      if (dishMenu[key].id == id) {
        return dishMenu[key];
      }
    }
  };
};
