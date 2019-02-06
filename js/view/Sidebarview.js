var Display = function(container, model){
  var side = `
    <h3 class="text-center">Your Dinner</h3>
    <div class="col">
      <p>Guests</p>
    </div>
    <div class="col">
      <div type="text" class="form-control" placeholder="Select Guests">
          <!-- Här ska det in en controller eller nått -->
        <p id="guestNum"></p>
      </div>
    </div>
    <div class="col">
       <div class="btn-group-horizontal" id="ourButtons" style="margin-top:10px">
         <button type="button" class="btn-deafult" id="buttonUp">+</button>
         <!-- Här ska det in en controller eller nått -->
         <button type="button" class="btn-deafult" id="buttonDown">-</button>
         <!-- Här ska det in en controller eller nått -->
       </div>
    </div>
  <div class="row border bg-secondary" style="margin-top:10px">
    <div class="col">
      <p>Dish name</p>
    </div>
    <div class="col">
      <p class="text-right">Cost</p>
    </div>
  </div>
  <div class="row border bg-secondary" id="sidebarList">
    <div class="col">
      <!-- Här ska det in en controller eller nått -->
      <p></p>
    </div>
    <div class="col">
      <p class="text-right">
        <!-- Här ska det in en controller eller nått -->
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
    </div>
  </div>
  <div class="row">
    <div class="col-sm d-flex justify-content-end">
      <!-- Här ska det in en controller eller nått -->
      <div id="totSum"></div>&nbspSEK
    </div>
  </div>
  <div class="row">
    <div class="col-sm d-flex justify-content-center">
      <button type="submit" class="btn btn-primary" id="confirmOrder">Confirm Order</button>
      <!-- Här ska det in en controller eller nått -->
    </div>
  </div>
  `
    container.html(side);
}

var People = function(container, model){
  this.plusButton = container.find("#buttonUp");
  this.minusButton = container.find("#buttonDown");
  var guests = container.find("#guestNum");
  this.update = function(change){
    if(change === "setGuestNum"){
      guests.html(model.getGuestNum);
    }
    }
    model.addObserver(this.update);
}

var Price = function(container, model){
    var price = container.find("#totSum");
    price.html(model.getTotalDishPrice(1));
}

var DishListName = function(container, model){
  var name = container.find("#dishname");
}

var DishListCost = function(container, model){
  var cost = container.find("#dishcost");
}
