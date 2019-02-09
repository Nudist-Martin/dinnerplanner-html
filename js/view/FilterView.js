var Filter = function(container, model){
  var descr = `
  <h4>Find a dish</h4>
  <div class="row">
    <div class="col-sm-9">
      <input type="text" class="form-control my-2" id="keyWords" placeholder="Enter key words">
      <!-- Här ska det in en controller eller nått -->
    </div>
    <div class="dropdown"> <!-- Ska det vara ett ID här någonstans? -->
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Type
        <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="#">Appetizer</a></li>
            <li><a href="#">Main Course</a></li>
            <li><a href="#">Dessert</a></li>
            <li><a href="#">Side Dish</a></li>
          </ul>
          <!-- Här ska det in en massa controllers eller nått -->
    </div>
    <div style="margin-left:10px";><button type="submit" class="btn btn-primary">Search</button>
      <!-- Här ska det in en controller eller nått -->
    </div>
  </div>
  <div class="row border-top border-dark" id="availableDishes">
    <div id="dishOptions" style="text-align:center; margin:10px;">
  </div>
</div>
  `
  container.html(descr);
}

/*this.update = function(typeControllerNamePlaceholder) {
  if (typeControllerNamePlaceholder === "någotjunk") {

  }
}
*/
