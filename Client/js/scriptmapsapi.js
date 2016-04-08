var map;
var infowindow;

function initMap() {
    var location = {lat: 52.379189, lng:4.899431};

    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });
    
    getPlaces(location);

    setCurrentLocation();
    infowindow = new google.maps.InfoWindow();

}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

function setCurrentLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(pos);
            getPlaces(pos);
        })
    }
}

function getPlaces(location){
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: location,
        radius: 5000,
        type: ['movie_theater']
    }, callback);
}

window.onload = initMap;