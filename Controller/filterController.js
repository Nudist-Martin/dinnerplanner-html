var FilterController = function(view, model, app) {
  view.submitButton.click(function() {
    let userType = document.getElementById("dropDownMenu").value;
    let userSearch = document.getElementById("keyWords").value;
    model.getAllDishes(userType, userSearch).then(results => {
      $(".loader")
        .show()
        .fadeOut(1000);
      model.setSearchValue(results);
      app.showSelectionScreen();
    });
  });
};