window.onload= function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setGuestNum(5);

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page)
	//var guestNum = new People($("#Sidebarview"), model);

	//var price = new Price($("#Sidebarview"), model);

	// And create the instance of ExampleView
	//const exampleView = new ExampleView(document.querySelector("#exampleView"));
    if (page == "Page1.html"){
        const welcomeView = new WelcomeView(document.querySelector("#welcome"), model);
    } else if (page == "Page2.html") { 
	    const mealsView = new MealsView(document.querySelector("#meals"), model);
        mealsView.addMealButtons();
    } else if (page == "Page3.html") { 
        const mealsView = new MealsView(document.querySelector("#meals"), model);
        mealsView.addMealButtons();
    } else if (page == "Page4.html") { 
        const mealsView = new MealsView(document.querySelector("#meals"), model);
        mealsView.addMealButtons();
    } else if (page == "Page5.html") { 
        const mealsView = new MealsView(document.querySelector("#meals"), model);
        mealsView.addMealButtons();
    } else if (page == "Page6.html") { 
        const mealsView = new MealsView(document.querySelector("#meals"), model);
        mealsView.addMealButtons();
    }

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */
};
