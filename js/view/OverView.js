var OverView = function(container, model) {
  this.backToEdit = container.find("#backToEdit");
  this.printFullRecipe = container.find("#printFullRecipe");
  this.update = function(changeDetails) {
    if (changeDetails === "addedToSidebar") {
      var showDishes = container.find("#finalDishes");
      var dishList = document.createElement("DIV");
      var totalMenuPrice = 0;
      model.customerMenu.map(dishes => {
        dishes.then(dish => {
          var price = container.find("#totalSum");
          var dishPrice = dish.pricePerServing;
          totalMenuPrice += dishPrice;
          var newCont = document.createElement("DIV");
          newCont.setAttribute(
            "style",
            "display:inline-block; width:160px; height:225px;"
          );
          var newButt = document.createElement("BUTTON");
          var newImg = document.createElement("img");
          newButt.className = "btn";
          newImg.src =
            "https://spoonacular.com/recipeImages/" + dish.id + "-312x231.jpg";
          newImg.alt = String(dish.title);
          newButt.innerHTML = String(dish.title);
          newCont.appendChild(newImg);
          newCont.appendChild(newButt);
          dishList.appendChild(newCont);
          var newCont = document.createElement("DIV");
          newCont.innerHTML = totalMenuPrice;
          price.html(newCont);
        });
      });
      showDishes.html(dishList);

      var guests = container.find("#myDinner");
      guests.html(model.getGuestNum);
    }
  };
  model.addObserver(this.update);
};
