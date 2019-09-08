var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var reviewForm = document.querySelector(".review__form");
var popapSuccess = document.querySelector(".popap-success");
var popapFailure = document.querySelector(".popap-failure");
if(popapSuccess){
  var closeSuccess = popapSuccess.querySelector(".modal__close");
}
if(popapFailure){
  var closeFailure = popapFailure.querySelector(".modal__close");
}
if(reviewForm){
  var userName = reviewForm.querySelector("[id=contacts-name]");
  var userFamily = reviewForm.querySelector("[id=contacts-family]");
  var userEmail = reviewForm.querySelector("[id=contacts-email]");
  var userTel = reviewForm.querySelector("[id=contacts-tel]");
}

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if(reviewForm){
reviewForm.addEventListener("submit", function(evt) {
  if (!userName.value || !userFamily.value || !userEmail.value || !userTel.value) {
    evt.preventDefault();
  popapFailure.classList.add("modal--show");
  }
  else {
    popapSuccess.classList.add("modal--show");
  }
});
}

if(closeSuccess){
closeSuccess.addEventListener('click', function() {
  popapSuccess.classList.remove("modal--show");
});
}

if(closeFailure){
closeFailure.addEventListener('click', function() {
  popapFailure.classList.remove("modal--show");
});
}


//карта google
function initMap() {
var coordinates = {lat: 34.870792, lng: -111.765570},
    markerImage = '../img/icon-map-marker.svg',
    zoom = 7 ,
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true
    }),
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
    });
}
initMap();
