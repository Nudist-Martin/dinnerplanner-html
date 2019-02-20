var DishlistView = function(container, model){

  var showDishes = container.find("#dishOptions");
  var dishList = [];
  this.dishFinder = container;

  this.update = function(changeDetails){
    if (changeDetails === "searched"){
    var menu = model.getSearchValue();
    for (var idx in menu){
        var newCont = document.createElement("DIV");
        newCont.setAttribute("style", "overflow:hidden");
        newCont.setAttribute("style", "display:inline-block; width:160px; height:225px;");
        var newText = document.createElement("div");
        var newImg = document.createElement("img");
        var infoButton = document.createElement("button");
        infoButton.setAttribute("class", "btn btn-info");
        infoButton.innerHTML = String("Info");
        infoButton.setAttribute('id', menu[idx].id);
        newImg.setAttribute("style", "max-width:150px");
        newImg.src = 'https://spoonacular.com/recipeImages/' + menu[idx].id + '-90x90.jpg'
        newText.innerHTML = String(menu[idx].title);
        newCont.appendChild(newImg);
        newCont.appendChild(newText);
        newCont.appendChild(infoButton);
        dishList.push(newCont);
      }
    showDishes.html(dishList);
    }
  }
  model.addObserver(this.update);
}
