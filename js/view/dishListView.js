var DishlistView = function(container, model){


  var showDishes = container.find("#dishOptions");
  var dishList = [];

  this.update = function(changeDetails){
    if (changeDetails === "searched"){
    var menu = model.getSearchValue();
    for (var idx in menu){
        var newCont = document.createElement("DIV");
        newCont.setAttribute("style", "display:inline-block; width:160px; height:225px;");
        var newButt = document.createElement("BUTTON");
        var newImg = document.createElement("img");
        newButt.className = "btn"
        newImg.src = 'https://spoonacular.com/recipeImages/' + menu[idx].id + '-90x90.jpg'
        newButt.innerHTML = String(menu[idx].title);
        newCont.appendChild(newImg);
        newCont.appendChild(newButt);
        dishList.push(newCont);
      }
    showDishes.html(dishList);
    }
  }
  model.addObserver(this.update);
}
