var ConfirmedController = function(view, model, app) {
  view.confirmOrder.click(function() {
    app.showYourDinnerScreen();
  });
};
