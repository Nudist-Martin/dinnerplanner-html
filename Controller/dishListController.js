var DishListController = function(view, model, app){
    console.log("hejsan");
    console.log(model.getSearchValue());
    this.searchlist = [];
    for (let i in model.getSearchValue()){
      this.searchVal = view.dishFinder.find("#"+model.getSearchValue()[i].id);
      this.searchlist.push(this.searchVal);
    //  console.log(this.searchVal);
    }
  console.log(this.searchlist);
  for (i in this.searchlist){
    this.searchlist[i].click(function(e){
      model.setSelectedDish(e.target.id);
      app.showDishDetailsScreen();
    });
  }
}
