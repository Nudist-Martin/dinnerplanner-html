var FilterController = function(view, model, app) {
  view.submitButton.click(function() {
    let userType = document.getElementById("dropDownMenu").value;
    let userSearch = document.getElementById("keyWords").value;
    if (userSearch === "") {
      alert(
        "You can't search for nothing, please type something in the search field, try meat or cheese!"
      );
    } else {
      model.getAllDishes(userType, userSearch).then(results => {
        model.setSearchValue(results);
        app.showSelectionScreen();
      });
    }
  });
};
