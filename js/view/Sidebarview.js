var SidebarView = function(container, model) {
  this.plusButton = container.find("#buttonUp");
  this.minusButton = container.find("#buttonDown");
  this.confirmOrder = container.find("#confirmOrder");
  var guests = container.find("#guestNum");

  this.update = function(changeDetails) {
    if (changeDetails === "setGuestNum") {
      guests.html(model.getGuestNum);
    }
  };
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

  this.update = function(changeDetails) {
    if (changeDetails == "addedToSidebar") {
      var price = container.find("#totSum");
      var num = model.getGuestNum();
      var menuDish = container.find("#menuDish");
      var myHTML = "";
      var totalMenuPrice = 0;
      model.customerMenu.map(dishes => {
        dishes.then(dish => {
          var dishName = dish.name;
          var dishPrice = dish.pricePerServing;
          totalMenuPrice += dishPrice;
          myHTML +=
            '<li><div class="col xs-8" style="font-size: 8pt;">' +
            dishName +
            '</div></li><li><div class="col-xs-4" style="font-size: 8pt;">' +
            dishPrice +
            "</div></li>";
          menuDish.html(myHTML);
          var newCont = document.createElement("DIV");
          newCont.innerHTML = totalMenuPrice;
          price.html(newCont);
        });
      });
    }
  };
  model.addObserver(this.update);
};
