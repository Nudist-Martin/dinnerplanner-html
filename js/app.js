window.onload = function() {
  var model = new DinnerModel();

  this.filter = "";
  this.type = "all";
  this.id = "ids";

  //Views
  let welcome = new WelcomeView($("#welcomeView"), model);
  let overView = new OverView($("#overView"), model);
  let customerDinner = new CustomerDinnerView($("#sidebarView"), model);
  let sidebar = new SidebarView($("#sidebarView"), model);
  let filter = new FilterView($("#filterView"), model);
  let dishDetails = new DishDetailsView($("#dishDetailsView"), model);
  let printOutView = new PrintOutView($("#printOutView"), model);

  //Controllers
  let welcomeController = new WelcomeController(welcome, model, this);
  let sidebarController = new SidebarController(sidebar, model, this);
  let filterController = new FilterController(filter, model, this);
  let dishDetailsController = new DishDetailsController(
    dishDetails,
    model,
    this
  );
  let confirmOrderController = new ConfirmOrderController(sidebar, model, this);
  let displayPrintOutController = new DisplayPrintOutController(
    overView,
    model,
    this
  );

  //show/hide-functions
  var hideAllViews = function() {
    $(".loader").hide();
    $("#printOutView").hide();
    $("#dishDetailsView").hide();
    $("#dishListView").hide();
    $("#filterView").hide();
    $("#overView").hide();
    $("#itemView").hide();
    $("#returnView").hide();
    $("#sidebarView").hide();
    $("#welcomeView").hide();
    $("#yourDinnerView").hide();
    $("#orderAndPrepView").hide();
    $("#recipeFooter").hide();
  };

  this.showWelcomeScreen = function() {
    hideAllViews();
    $("#welcomeView").show();
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
    $("#dishDetailsView").show();
  };

  this.showOverViewScreen = function() {
    let overViewController = new OverViewController(overView, model, this);
    hideAllViews();
    $("#overView").show();
    $("#recipeFooter").show();
  };

  this.showPrintOutScreen = function() {
    hideAllViews();
    $("#printOutView").show();
    $("#orderAndPrepView").show();
  };

  this.showWelcomeScreen();
};
