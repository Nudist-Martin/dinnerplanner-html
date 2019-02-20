var DishDescriptionView = function(container, model){

  var num = container.find("#guestNumIngr");
  num.html(model.getGuestNum);

  var specificDish =  model.getSelectedDish();
  var showIngredients = container.find("#dishIngredients");
  var ingredTable = document.createElement("table");
  ingredTable.setAttribute("id","bordet");
  ingredTable.setAttribute("style","border-collapse:collapse");
  for (var idx in specificDish.extendedIngredient){
      var newTr = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.setAttribute("style", "font-weight:700;padding:10px; border:1px dashed black;")
      var td2 = document.createElement("td");
      td2.setAttribute("style", "font-weight:700;padding:10px; border:1px dashed black;")
      var td3 = document.createElement("td");
      td3.setAttribute("style", "font-weight:700;padding:10px; border:1px dashed black;")
      var td4 = document.createElement("td");
      td4.setAttribute("style", "font-weight:700;padding:10px; border:1px dashed black;")

      var quantity = document.createTextNode(specificDish.extendedIngredients[idx].amount);
      td1.appendChild(quantity);

      var unit = document.createTextNode(specificDish.extendedIngredients[idx].unit);
      td2.appendChild(unit);

      var name = document.createTextNode(specificDish.extendedIngredients[idx].title);
      td3.appendChild(name);

      var price = document.createTextNode(specificDish.pricePerServing);
      td4.appendChild(price);

      newTr.appendChild(td1);
      newTr.appendChild(td2);
      newTr.appendChild(td3);
      newTr.appendChild(td4);
      ingredTable.appendChild(newTr);
  }
  showIngredients.html(ingredTable);

  var price = container.find("#IngredientsTotalPrice");
  //var dish = model.getDish(1);
  //var dishPrice = model.getTotalDishPrice(dish.id);
  //price.html(dishPrice + " SEK");
}
