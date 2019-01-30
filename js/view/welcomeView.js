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

class WelcomeView {
  constructor (container, model){
    this.container = container;
  	this.model = model;
    this.button = container.querySelector("#test");
    this.button.innerHTML = "Create a TESTy menu!"
  }
}
