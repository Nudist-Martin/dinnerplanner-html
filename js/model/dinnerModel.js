var DinnerModel = function() {
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	var guestNum = 1;
	var totalPrice = 40;
	var customerMenu = [];
	var dishMenu = [{

		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"Not even French...",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{

			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{

			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{

			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{

			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]

		},{

		'id':2,
		'name':'Jar with dough' ,
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Who even likes sourdough? Why can't it be happy?",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{

			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0

			},{

			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]

		},{

		'id':3,
		'name':'Baked Brie',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Brie... oh how I despise thee",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{

			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{

			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]

		},{

		'id':100,
		'name':'Meatballs',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"As the name suggests, it's not suitable for vegans in the slightest.",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{

			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{

			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{

			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{

			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{

			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{

			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{

			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{

			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{

			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{

			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]

		},{

		'id':101,
		'name':'Delikat mat',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Come on, it's just Brie again but even worse!",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'Cheese',
			'quantity':50,
			'unit':'g',
			'price':50
			},{

			'name':'Other cheese',
			'quantity':4,
			'unit':'g',
			'price':70
			},{

			'name':'Oven',
			'quantity':200,
			'unit':'kg',
			'price':1000
			}]

		},{

		'id':102,
		'name':'Skaldjursplatå',
		'type':'main dish',
		'image':'skaldjur.jpg',
		'description':"You sacrifice your firstborn child to Knack.",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'Crab',
			'quantity':2,
			'unit':'kg',
			'price':389
			},{

			'name':'Clam',
			'quantity':10,
			'unit':'g',
			'price':7
			},{

			'name':'Lobster',
			'quantity':5,
			'unit':'g',
			'price':400
			}]

		},{

		'id':103,
		'name':'Tasty Dish',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Look at a mirror and think about hot bois.",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'Twink',
			'quantity':2,
			'unit':'pieces',
			'price':4
			},{

			'name':'Swing',
			'quantity':100,
			'unit':'kg',
			'price':700
			},{

			'name':'Dom',
			'quantity':6,
			'unit':'pieces',
			'price':4000
			}]

		},{

		'id':200,
		'name':'Good Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Find a snowman and make him teach you the secret of nice-cream.",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]

		},{

		'id':201,
		'name':'Cool Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Be bad at sex, the rest comes naturally.",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]

		},{

		'id':202,
		'name':'Tasty Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Listen to De Vet Du and imagine yourself as a gay boi.",
		'preperation':"How to Make: Shie boi I dunno, mix sum shit or smthn",

		'ingredients':[{

			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}];

	    var observers=[];
	    this.addObserver = function(observer){
				observers.push(observer);
			}

	    var notifyObservers = function(changeDetails){
	        for(var i=0; i < observers.length; i++)
	             observers[i](changeDetails);
						 }

	this.setGuestNum = function(num) {
		guestNum += num;
		if (guestNum < 1) {
			guestNum = 1;
		}
		notifyObservers("setGuestNum");
	}

	this.getGuestNum = function() {
		return guestNum;
	}
	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(id) {
		return dishMenu.find(x => x.id === id);
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return dishMenu;
	}

	this.setCustomerMenu = function(id){
		for (dish in dishMenu){
			if (dishMenu[dish].id === id){
				customerMenu.push(dishMenu[dish]);
			}
		}
	}

	this.getCustomerMenu = function(){
		return customerMenu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		for (key in dishMenu) {
			return dishMenu[key].ingredients;
		}
	}
	//Returns the total price of the dish (all the ingredients multiplied by number of guests).
	this.getTotalDishPrice = function(id) {
		var totalDishPrice = 0;
		var people = this.getGuestNum();
		var dishIngredientList = dishMenu.find(x => x.id === id).ingredients;
		for (key in dishIngredientList){
			totalDishPrice += dishIngredientList[key].price*people;
		}
		return totalDishPrice;
	}
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice = 0;
		var people = this.getGuestNum();
		var ingredientList = this.getAllIngredients();
		for (key in ingredientList) {
			totalPrice += ingredientList[key].price*people;
		}
		return totalPrice;
	}
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var newDish = this.getDish(id)
		var oldDish = this.getSelectedDish(newDish.type)
			if (oldDish.type === newDish.type) {
				removeDishFromMenu(oldDish.id);
			}
		dishMenu.push(newDish);
	}
	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var idx = dishMenu.findIndex(x => x.id === id);
		delete dishMenu[idx];
	}

	this.getAllDishes = function(type,filter) {
	  return dishMenu.filter(function(dish) {
		var found = true;
		if(filter){
			found = false;
			dish.ingredients.forEach(function(ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)	{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });
	}
	//function that returns a dish of specific ID
	this.getDish = function(id) {
	    for(key in dishMenu){
		if(dishMenu[key].id == id) {
		    return dishMenu[key];
		  }
	  }
	}
}
