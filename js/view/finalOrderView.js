var SelectedMeals = function(container, model){
    var menu = model.getCustomerMenu();
    var showDishes = container.find("#finalDishes");
    var dishList = [];
    for (var idx in menu){
        var newCont = document.createElement("DIV");
        newCont.setAttribute("style", "display:inline-block; width:160px; height:225px;");
        var newButt = document.createElement("BUTTON");
        var newImg = document.createElement("img");
        var newText = document.createElement("p")
        newButt.className = "btn"
        newImg.src = "images/" + String(menu[idx].image);
        newImg.alt = String(menu[idx].name);
        newText.innerHTML = String(model.getTotalDishPrice(menu[idx].id));
        newButt.innerHTML = String(menu[idx].name);
        newCont.appendChild(newImg);
        newCont.appendChild(newButt);
        newCont.appendChild(newText);
        dishList.push(newCont);
    }
    showDishes.html(dishList);
}

var FinPrice = function(container, model){
    var price = container.find("#totSum");
    price.html(model.getTotalDishPrice(1));
}

var FinGuests = function(container, model){
  var guests = container.find("#myDinner");
  guests.html(model.getGuestNum);
}
