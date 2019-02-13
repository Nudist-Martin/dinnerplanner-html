var DishDescriptionView = function(container, model){

  var num = container.find("#guestNumIngr");
  num.html(model.getGuestNum);

  var specificDish = model.getSelectedDish(1);
  var ingredList = model.getAllIngredients();
  var showIngredients = container.find("#dishIngredients");
  var ingredTable = document.createElement("table");
  ingredTable.setAttribute("id","bordet");
  ingredTable.setAttribute("style","border-collapse:collapse");
  for (var idx in specificDish.ingredients){
      var newTr = document.createElement("tr");
      var td1 = document.createElement("td");
      td1.setAttribute("style", "font-weight:700;padding:10px; border:1px dashed black;")
      var td2 = document.createElement("td");
      td2.setAttribute("style", "font-weight:700;padding:10px; border:1px dashed black;")
      var td3 = document.createElement("td");
      td3.setAttribute("style", "font-weight:700;padding:10px; border:1px dashed black;")
      var td4 = document.createElement("td");
      td4.setAttribute("style", "font-weight:700;padding:10px; border:1px dashed black;")

      var quantity = document.createTextNode(specificDish.ingredients[idx].quantity);
      td1.appendChild(quantity);

      var unit = document.createTextNode(specificDish.ingredients[idx].unit);
      td2.appendChild(unit);

      var name = document.createTextNode(specificDish.ingredients[idx].name);
      td3.appendChild(name);

      var price = document.createTextNode(specificDish.ingredients[idx].price);
      td4.appendChild(price);

      newTr.appendChild(td1);
      newTr.appendChild(td2);
      newTr.appendChild(td3);
      newTr.appendChild(td4);
      ingredTable.appendChild(newTr);
  }
  showIngredients.html(ingredTable);

  var price = container.find("#ingredientsTotalPrice");
  var dish = model.getDish(1);
  var dishPrice = model.getTotalDishPrice(dish.id);
  price.html(dishPrice + " SEK");
}
