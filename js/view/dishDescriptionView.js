var DishDescriptionView = function(container, model) {
  this.update = function(changeDetails) {
    if (changeDetails === "setGuestNum") {
      var num = container.find("#guestNumIngr");
      num.html(model.getGuestNum);
    }
  };
  model.addObserver(this.update);

  this.backbutton = container.find("#goBackButton");
  this.addedButton = container.find("#addButton");

  this.container = container;
  this.update = function(changeDetails) {
    if (changeDetails === "change") {
      this.showdescr = container.find("#dishDescription");
      let showIngredients = container.find("#dishIngredients");
      var specificDish = model.getSelectedDish().then(dish => {
        var mother = document.createElement("div");
        var dishimg = document.createElement("img");
        var title = document.createElement("h5");
        var descri = document.createElement("p");
        //var backbutton = document.createElement("button");
        dishimg.setAttribute(
          "src",
          "https://spoonacular.com/recipeImages/" + dish.id + "-312x231.jpg"
        );
        title.appendChild(document.createTextNode(dish.title));
        descri.appendChild(document.createTextNode(dish.instructions));
        //backbutton.appendChild(document.createTextNode("Go Back"));
        //backbutton.setAttribute("id", "goBackButton");
        mother.appendChild(dishimg);
        mother.appendChild(title);
        mother.appendChild(descri);
        //mother.appendChild(backbutton);
        var ingredTable = document.createElement("table");
        ingredTable.setAttribute("id", "bordet");
        ingredTable.setAttribute("style", "border-collapse:collapse");
        for (var idx in dish.extendedIngredients) {
          var newTr = document.createElement("tr");
          var td1 = document.createElement("td");
          td1.setAttribute(
            "style",
            "font-weight:700;padding:10px; border:1px dashed black;"
          );
          var td2 = document.createElement("td");
          td2.setAttribute(
            "style",
            "font-weight:700;padding:10px; border:1px dashed black;"
          );
          var td3 = document.createElement("td");
          td3.setAttribute(
            "style",
            "font-weight:700;padding:10px; border:1px dashed black;"
          );
          var td4 = document.createElement("td");
          td4.setAttribute(
            "style",
            "font-weight:700;padding:10px; border:1px dashed black;"
          );

          var quantity = document.createTextNode(
            dish.extendedIngredients[idx].amount * model.getGuestNum()
          );
          td1.appendChild(quantity);

          var unit = document.createTextNode(
            dish.extendedIngredients[idx].unit
          );
          td2.appendChild(unit);

          var name = document.createTextNode(
            dish.extendedIngredients[idx].name
          );
          td3.appendChild(name);

          var price = document.createTextNode(
            Math.round(dish.pricePerServing / 10) * model.getGuestNum()
          );
          td4.appendChild(price);

          newTr.appendChild(td1);
          newTr.appendChild(td2);
          newTr.appendChild(td3);
          newTr.appendChild(td4);
          ingredTable.appendChild(newTr);
        }
        var price = container.find("#ingredientsTotalPrice");
        var dishPrice = dish.pricePerServing * model.getGuestNum();
        price.html(dishPrice + " SEK");
        this.showdescr.html(mother);
        showIngredients.html(ingredTable);
      });
    }
  };
  model.addObserver(this.update);
};
