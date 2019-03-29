var CustomerDinnerView = function(container, model) {
  this.update = function(changeDetails) {
    if (changeDetails === "added") {
      var listerino = container.find("#sidebarList");
      var dishList = document.createElement("DIV");
      dishList.setAttribute("class", "row");
      model.customerMenu.map(dishes => {
        dishes.then(dish => {
          var dishTitle = document.createElement("span");
            dishTitle.setAttribute("class", "col-sm-9");
          var dishPrice = document.createElement("span");
            dishPrice.setAttribute("class", "col-sm-3");
            dishPrice.setAttribute("style", "float-right");
          dishTitle.innerHTML = dish.title;
          dishPrice.innerHTML = dish.pricePerServing;
          dishList.appendChild(dishTitle);
          dishList.appendChild(dishPrice);
        });
      });
      listerino.html(dishList);
    }
  };
  model.addObserver(this.update);

}
