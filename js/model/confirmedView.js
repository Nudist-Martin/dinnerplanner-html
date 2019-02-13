var ConfirmedView = function (container, model){

  var menu = model.getCustomerMenu();
  var showDishes = container.find("#orderDescriptions");
  var dishList = [];
  for (var idx in menu){
      var newCont = document.createElement("DIV");
      newCont.setAttribute("style", "display:inline-block; width:160px; height:225px;");
      var newName = document.createElement("name");
      var newImg = document.createElement("img");
      var newDescr = document.createElement("description")
      newImg.src = "images/" + String(menu[idx].image);
      newImg.alt = String(menu[idx].name);
      newDescr.innerHTML = String(menu[idx].description);
      newName.innerHTML = String(menu[idx].name);
      newCont.appendChild(newImg);
      newCont.appendChild(newName);
      newCont.appendChild(newDescr);
      dishList.push(newCont);
  }
  showDishes.html(dishList);

  var menu = model.getCustomerMenu();
  var showDishes = container.find("#preperationDescriptions");
  var dishList = [];
  for (var idx in menu){
      var newCont = document.createElement("DIV");
      var newPrep = document.createElement("preperation")
      newPrep.innerHTML = String(menu[idx].preperation);
      newCont.appendChild(newPrep);
      dishList.push(newCont);
  }
  showDishes.html(dishList);

  var guests = container.find("#finDinGuests");
  guests.html(model.getGuestNum);

}
