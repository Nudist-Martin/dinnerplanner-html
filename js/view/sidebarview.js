var SidebarView = function(container, model){

  this.plusButton = container.find("#buttonUp");
  this.minusButton = container.find("#buttonDown");
  var guests = container.find("#guestNum");
  this.update = function(change){
    if(change === "setGuestNum"){
      guests.html(model.getGuestNum);
    }
  }
    model.addObserver(this.update);

    var table = document.createElement("table");
    table.setAttribute("id", "sideTable");

    var tableRow = document.createElement("tr");
    table.setAttribute("id", "sideTableRow");
    table.appendChild(tableRow);

    var tableName = document.createElement("th");
    tableName.setAttribute("id", "sideTableName");
    tableName.appendChild(document.createTextNode("Name"));
    tableRow.appendChild(tableName);

    var tableCost = document.createElement("th");
    tableCost.setAttribute("id", "sideTableCost");
    tableCost.appendChild(document.createTextNode("Cost"));
    tableRow.appendChild(tableCost);

    var tableRemove = document.createElement("th");
    tableRemove.setAttribute("id", "sideTableRemove");
    tableRemove.appendChild(document.createTextNode("Remove"));
    tableRow.appendChild(tableRemove);

this.update = function(){
  if (changeDetails == "Sauce"){
    var price = container.find("#totSum");
    var dish = container.find("#menuDish");
    guestNum.html(model.getGuestNum());
    var num = model.getGuestNum();
    var dish = container.find("#menuDish");
    var myHTML = '';
    var totalMenuPrice = 0;

    var menu = model.getFullMenu();
    for (i in menu){
      var dish = menu[i];
      var dishName = dish.name[1];
      var dishPrice = model.getDishPrice(dish.ingredients);
      totalMenuPrice += dishPrice;
      myHTML += '<li><div class="col xs-8" style="font-size: 8pt;">'+dishName+'</div></li><li><div class="col-xs-4" style="font-size: 8pt;">'+dishPrice+'</div></li>'
      menuDish.html(myHTML);
      price.html(totalMenuPrice + " SEK");
      }
    }
  }
}
