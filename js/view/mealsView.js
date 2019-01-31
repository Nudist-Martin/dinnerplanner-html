/** ExampleView Object constructor
 *
 * This object represents one specific view (in this case the Example view).
 *
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally)
 * - populating the view with the data
 * - updating the view when the data changes
 *
 * You should create a view class like this for every view in your UI.
 *
 * @param {Object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */
 var Guests = function(container, model){
   var guests = container.find("#numberOfGuests");
   guests.html(model.getGuestNum());
 }

class MealsView {
  constructor (container, model){
    this.container = container;
    this.model = model;
  }


addMealButtons(){
    var menu = this.model.getFullMenu()
    for (var idx in menu){
        console.log(menu[idx]['name'])
        var newCont = document.createElement("DIV")
        var newButt = document.createElement("BUTTON")
        var newImg = document.createElement("img")
        newCont.className = "container"
        newButt.className = "btn"
        newImg.src = "images/" + String(menu[idx]['image'])
        newImg.alt = String(menu[idx]['name'])
        newButt.innerHTML = String(menu[idx]['name'])
        newCont.appendChild(newImg)
        newCont.appendChild(newButt)
        this.container.appendChild(newCont)
    }
}
}