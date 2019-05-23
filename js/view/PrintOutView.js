var PrintOutView = function(container, model) {
  this.update = function(change) {
    if (change === "added") {
      var menu = model.getCustomerMenu();
      var showDishes = container.find("#orderDescriptions");
      var dishList = document.createElement("DIV");
      model.customerMenu.map(dishes => {
        dishes.then(dish => {
          var newCont = document.createElement("DIV");

          var newName = document.createElement("name");
          var newImg = document.createElement("img");

          newImg.src =
            "https://spoonacular.com/recipeImages/" + dish.id + "-312x231.jpg";
          newImg.alt = String(dish.title);

          newName.innerHTML = String(dish.title);
          newCont.appendChild(newImg);
          newCont.appendChild(newName);
          dishList.appendChild(newCont);
        });
      });
      showDishes.html(dishList);

      var menu = model.getCustomerMenu();
      var showDishes = container.find("#preperationDescriptions");
      var dishLista = document.createElement("DIV");
      model.customerMenu.map(dishes => {
        dishes.then(dish => {
          var newConti = document.createElement("DIV");
          var newDescr = document.createElement("description");
          newDescr.innerHTML = String(dish.instructions);
          newConti.appendChild(newDescr);
          dishLista.appendChild(newConti);
        });
      });
      showDishes.html(dishLista);

      var guests = container.find("#finDinGuests");
      guests.html(model.getGuestNum);
    }
  };
  model.addObserver(this.update);
};
