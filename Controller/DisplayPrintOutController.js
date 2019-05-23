var DisplayPrintOutController = function(view, model, app) {
  view.printFullRecipe.click(function() {
    app.showPrintOutScreen();
  });
};
