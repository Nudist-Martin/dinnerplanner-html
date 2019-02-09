var Disp = function(container, model){
  var descr = `
  <h2>Skaldjursplatå</h2>
    <div>
      <div class="row">
        <div class="col-sm-9">
          <img src="images/skaldjur.jpg" class="img-responsive" style="width: 50%; height: 80%">
        </div>
      </div>
      <div class="row">
        <p style="margin-left: 20px">Åh, kolla vad rik jag är!<p>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Back to search</button>
      </div>
      <div>
        <h1>Preparations</h1>
          Såhär lagar man god mat!
      </div>
    </div>
  </div>
  `
  container.html(descr);
}

var Ingr = function(container, model){
  var listo = `
  <div class="container-fluid">
    <div class="row">
      <div class="col" id="ingredientHead">
        <h4>Ingredients for <span id="guestNumIngr"></span> people </h4>
        <!-- Här ska det in en controller eller nått -->
      </div>
    </div>
    <div class="row border border-dark">
      <div class="col" id="dishIngredients">

      </div>
    </div>
    <div class="row" style="margin-top:10px">
      <div class="col"><button class="btn btn-primary" id="addButton">Add to menu</button>
        <!-- Här ska det in en controller eller nått -->
      </div>
        <div class="col" id="ingredientsTotalPrice">
        </div>
    </div>
  </div>
  `
  container.html(listo);
}

var IngredPeeps = function(container, model){
  var num = container.find("#guestNumIngr");
  num.html(model.getGuestNum);
}

var Ingredpush = function(container, model){
  var specificDish = model.getSelectedDish(1);
  var ingredList = model.getAllIngredients();
  var showIngredients = container.find("#dishIngredients");
  var ingredTable = document.createElement("table");
  ingredTable.setAttribute("id","bordet");
  ingredTable.setAttribute("style","border-collapse:collapse");
  for (var idx in specificDish.ingredients){
      var newTr = document.createElement("tr");
      var newTd = document.createElement("td");
      newTd.innerHTML = String(specificDish.ingredients[idx].quantity + "&nbsp" + "&nbsp" + "&nbsp" + specificDish.ingredients[idx].unit + "&nbsp" + "&nbsp" + "&nbsp" + specificDish.ingredients[idx].name + "&nbsp" + "&nbsp" + "&nbsp" + "SEK " + specificDish.ingredients[idx].price);
      newTr.appendChild(newTd);
      ingredTable.appendChild(newTr);
  }
  showIngredients.html(ingredTable);
}
