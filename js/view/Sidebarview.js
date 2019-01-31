<<<<<<< HEAD
class People {
  constructor (container, model){
    var guests = container.find("#guests");
    guests.value = 5;
  }
}
class Price {
  constructor (container, model){
  //  alert(model.getTotalMenuPrice());
    var price = container.find("#TotalPrice");
    price.html(model.getTotalMenuPrice());
  }
}
var elMainSelect = document.getElementById('mainSelect');

function selectOptionsCreate() {
  var frag = document.createDocumentFragment(),
    elOption;
  for (var i=12; i<101; ++i) {
    elOption = frag.appendChild(document.createElement('option'));
    elOption.text = i;
  }
  elMainSelect.appendChild(frag);
}
=======
class People {
  constructor (container, model){
    var guests = container.find("#numberOfGuests");
    guests.html(model.getGuestNum());
  }
}
class Price {
  constructor (container, model){
  //  alert(model.getTotalMenuPrice());
    var price = container.find("#TotalPrice");
    price.html(model.getTotalMenuPrice());
  }
}
>>>>>>> e6c2c21b0c79e212fe7faca770e7c1356bcba237
