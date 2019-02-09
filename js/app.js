window.onload= function() {

var model = new DinnerModel();
model.setCustomerMenu(1);
model.setCustomerMenu(101);
model.setCustomerMenu(2);

let dispFilter = new Filter($("#findADish"), model);
let dishToggle = new AddMealButtons($("#availableDishes"), model);
let showSidebar = new Display($("#sidebar"), model);
let guestChange = new People($("#sidebar"), model);
let priceChange = new Price($("#sidebar"), model);
let dishDescr = new Disp($("#dishDescription"), model);
let ingredientDescr = new Ingr($("#losIngredientos"), model);
let sumChange = new FinPrice($("#orderContainer"), model);
let finGuests = new FinGuests($("#myDinner"), model);
let finalGuests = new FinyGuests($("#dinnerGuestsRoot"), model);
let finMeals = new SelectedMeals($("#sho"), model);
let ingredz = new Ingredpush($("#losIngredientos"), model);
let ingredPeepz = new IngredPeeps($("#ingredientHead"), model)

var GuestNumController = function(view, model) {
  view.plusButton.click(function(){
     model.setGuestNum(1);
  });

 view.minusButton.click(function(){
     model.setGuestNum(-1);
 });
}
GuestNumController(guestChange, model);
};
