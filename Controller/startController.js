var StartController = function(view, model, app){
  view.startButton.click(function(){
    app.showSelectionScreen();
  });
}
