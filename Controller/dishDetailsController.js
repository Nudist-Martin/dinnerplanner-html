var DishDetailsController = function(view, model, app) {
  view.backbutton.click(function() {
    app.showSelectionScreen();
  });
  view.addedButton.click(function() {
    model.addToSidebar();
  });
};
