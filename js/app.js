window.onload= function() {

var model = new DinnerModel();

this.filter = "";
this.type = "all";
this.id = "ids";

//Views
let start = new StartView($("#startView"), model);
let sidebar = new SidebarView($("#sidebarView"), model);
let filter = new FilterView($("#filterView"), model);
let dishList = new DishlistView($("#dishListView"), model);
let dishDescription = new DishDescriptionView($("#dishDescriptionView"), model);
let finalOrder = new FinalOrderView($("#finalOrderView"), model);
let confirmedView = new ConfirmedView($("#confirmedView"), model);

let sidebarController = new SidebarController(sidebar, model, this);
let filterController = new FilterController(filter, model, this);

//Controllers
/*let startController = new StartController(start, model, this);


let dishListController = new DishListController(dishList, model, this);
let dishDescriptionController = new DishDescriptionController(dishDescription, model, this);
let finalOrderController = new FinalOrderController(finalOrder, model, this);
let confirmedController = new ConfirmedController(start, model, this);*/


//show/hide-functions
var hideAllViews = function() {
  $('.loader').hide();
  $('#confirmedView').hide();
  $('#dishDescriptionView').hide();
  $('#dishListView').hide();
  $('#filterView').hide();
  $('#finalOrderView').hide();
  $('#itemView').hide();
  $('#returnView').hide();
  $('#sidebarView').hide();
  $('#startView').hide();
  $('#yourDinnerView').hide();
  $('#orderAndPrepView').hide();
  $('#recipeFooter').hide();
}

var showStartScreen = function() {
  hideAllViews();
  $('#startView').show();
}

var showSelectionScreen = function() {
  hideAllViews();
  $('#sidebarView').show();
  $('#filterView').show();
  $('#dishListView').show();
}

var showDishDetailsScreen = function() {
  hideAllViews();
  $('#sidebarView').show();
  $('#dishDescriptionView').show();
}

var showFinalOrderScreen = function() {
  hideAllViews();
  $('#confirmedView').show();
  $('#finalOrderView').show();
  $('#recipeFooter').show();
}

var showYourDinnerScreen = function() {
  hideAllViews();
  $('#confirmedView').show();
  $('#yourDinnerView').show();
  $('#orderAndPrepView').show();
}

showSelectionScreen();
};
