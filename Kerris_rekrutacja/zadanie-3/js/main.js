'use strict';

var map;

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(52.0, 21.0),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var markerOne = new google.maps.LatLng(51.7459413, 19.4587987);
    var optionsMarkerOne = {
        position: markerOne,
        map: map,
        title: "Marker!"
    }
    var markerOne = new google.maps.Marker(optionsMarkerOne);


    var markerTwo = new google.maps.LatLng(51.0919751, 17.0202408);
    var optionsMarkerTwo = {
        position: markerTwo,
        map: map,
        title: "Marker!"
    }
    var markerTwo = new google.maps.Marker(optionsMarkerTwo);


    var markerThree = new google.maps.LatLng(52.2055502, 21.0631415);
    var optionsMarkerThree = {
        position: markerThree,
        map: map,
        title: "Marker!"
    }
    var markerThree = new google.maps.Marker(optionsMarkerThree);



    function centerWarsaw() {
        var mapOptions = {
            center: new google.maps.LatLng(52.2055502, 21.0631415),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

    document.getElementById("Warszawa").addEventListener('click', centerWarsaw);


    function centerLodz() {
        var mapOptions = {
            center: new google.maps.LatLng(51.7459413, 19.4587987),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

    document.getElementById("Lodz").addEventListener('click', centerLodz);

    function centerWroclaw() {
        var mapOptions = {
            center: new google.maps.LatLng(51.0919751, 17.0202408),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

    document.getElementById("Wroclaw").addEventListener('click', centerWroclaw);



    function zoomIn() {
        map.setZoom(map.getZoom() + 2);

    }

    document.getElementById("zoomin").addEventListener('click', zoomIn);


    function zoomOut() {
        map.setZoom(map.getZoom() - 2);

    }

    document.getElementById("zoomout").addEventListener('click', zoomOut);
    
    

    document.getElementById("left").addEventListener('click', function () {
        map.panBy(-50, 0);
    });

    document.getElementById("top").addEventListener('click', function () {
        map.panBy(0, -50);
    });

    document.getElementById("right").addEventListener('click', function () {
        map.panBy(50, 0);
    });

    document.getElementById("down").addEventListener('click', function () {
        map.panBy(0, 50);
    });
}
