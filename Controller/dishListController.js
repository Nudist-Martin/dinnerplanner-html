var DishListController = function(view, model, app) {
  this.searchlist = [];
  for (let i in model.getSearchValue()) {
    this.searchVal = view.dishFinder.find("#" + model.getSearchValue()[i].id);
    this.searchlist.push(this.searchVal);
  }
  for (i in this.searchlist) {
    this.searchlist[i].click(function(e) {
      model.setSelectedDish(e.target.id);
      app.showDishDetailsScreen();
    });
  }
};
