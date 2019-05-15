window.onload = function() {
  var model = new DinnerModel();

  this.filter = "";
  this.type = "all";
  this.id = "ids";

  //Views
  let start = new StartView($("#startView"), model);
  let sidebar = new SidebarView($("#sidebarView"), model);
  let filter = new FilterView($("#filterView"), model);
  let dishDescription = new DishDescriptionView($("#dishDescriptionView"), model);
  let customerDinner = new CustomerDinnerView($("#sidebarView"), model);
  //let finalOrder = new FinalOrderView($("#finalOrderView"), model);
  let confirmedView = new ConfirmedView($("#orderAndPrepView"), model);

  //Controllers
  let sidebarController = new SidebarController(sidebar, model, this);
  let filterController = new FilterController(filter, model, this);
  let dishDescriptionController = new DishDescriptionController(dishDescription, model, this);
  let confirmedController = new ConfirmedController(sidebar, model, this);
  /*let startController = new StartController(start, model, this);
    let finalOrderController = new FinalOrderController(finalOrder, model, this);
  */

  //show/hide-functions
  var hideAllViews = function() {
    $(".loader").hide();
    $("#confirmedView").hide();
    $("#dishDescriptionView").hide();
    $("#dishListView").hide();
    $("#filterView").hide();
    $("#finalOrderView").hide();
    $("#itemView").hide();
    $("#returnView").hide();
    $("#sidebarView").hide();
    $("#startView").hide();
    $("#yourDinnerView").hide();
    $("#orderAndPrepView").hide();
    $("#recipeFooter").hide();
  };

  this.showStartScreen = function() {
    hideAllViews();
    $("#startView").show();
  };

  this.showSelectionScreen = function() {
    let dishList = new DishlistView($("#dishListView"), model);
    let dishListController = new DishListController(dishList, model, this);
    hideAllViews();
    $("#sidebarView").show();
    $("#filterView").show();
    $("#dishListView").show();
  };

  this.showDishDetailsScreen = function() {
    hideAllViews();
    $("#sidebarView").show();
    $("#dishDescriptionView").show();
  };

  this.showFinalOrderScreen = function() {
  //  hideAllViews();
    $("#confirmedView").show();
    $("#finalOrderView").show();
    $("#recipeFooter").show();
  };

  this.showYourDinnerScreen = function() {
    hideAllViews();
    let confirmedView = new ConfirmedView($("#orderAndPrepView"), model);
    $("#confirmedView").show();
    $("#yourDinnerView").show();
    $("#orderAndPrepView").show();
  };

  this.showSelectionScreen();
};
