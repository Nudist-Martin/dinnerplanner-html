var AddMealButtons = function(container, model) {
  var menu = model.getFullMenu();
  var showDishes = container.find("#dishOptions");
  var dishList = [];
  for (var idx in menu) {
    var newCont = document.createElement("DIV");
    newCont.setAttribute("style", "display:inline-block; width:160px; height:225px;");
    var newButt = document.createElement("BUTTON");
    var newImg = document.createElement("img");
    newButt.className = "btn";
    newImg.src = "images/" + String(menu[idx].image);
    newImg.alt = String(menu[idx].name);
    newButt.innerHTML = String(menu[idx].name);
    newCont.appendChild(newImg);
    newCont.appendChild(newButt);
    dishList.push(newCont);
  }
  showDishes.html(dishList);
};
