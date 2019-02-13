var SidebarController = function(view, model, app) {

  view.plusButton.click(function(){
     model.setGuestNum(1);
  });

  view.minusButton.click(function(){
     model.setGuestNum(-1);
 })

};
