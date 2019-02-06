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
        <h4>Ingredients for 3 people</h3>
        <!-- Här ska det in en controller eller nått -->
      </div>
    </div>
    <div class="row border border-dark">
      <div class="col" id="dishIngredients">
        <p>Here is a list of ingredients</p>
      </div>
    </div>
    <div class="row" style="margin-top:10px">
      <div class="col"><button class="btn btn-primary" id="addButton">Add to menu</button>
        <!-- Här ska det in en controller eller nått -->
      </div>
        <div class="col" id="dishPrice">
        </div>
    </div>
  </div>
  `
  container.html(listo)
}

var ingred
