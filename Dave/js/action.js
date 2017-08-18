
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 19.4000289, lng: -99.1818828}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    //animation: google.maps.Animation.BOUNCE,
    position: {lat: 19.435275, lng: -99.1412366}
  });

  marker2 = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.BOUNCE,
    position: {lat: 19.4260032, lng: -99.1884673}
  });

  marker3 = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.BOUNCE,
      position: {lat: 19.6932306, lng: -98.8518081}
    });

  marker4 = new google.maps.Marker(  {
      map: map,
      draggable: true,
      animation: google.maps.Animation.BOUNCE,
      position: {lat: 19.4406926, lng: -99.2068888}
    });

  marker5 = new google.maps.Marker(  {
      map: map,
      draggable: true,
      animation: google.maps.Animation.BOUNCE,
      position: {lat: 19.4327536, lng: -99.1334061}
   });

   marker6 = new google.maps.Marker(  {
       map: map,
       draggable: true,
       animation: google.maps.Animation.BOUNCE,
       position: {lat: 19.355143, lng: -99.1647136}
    });

    var palacioBellas = '<h1> Palacio de Bellas Artes </h1>'+
        '<p>El Palacio de Bellas Artes es un centro cultural ubicado en el Centro Histórico de la Ciudad de México.'+
        '<a href="../Aarón/bellasArtes.html">Más Información</a>';

    var infoPalacio = new google.maps.InfoWindow({
        content: palacioBellas
    });

    marker.addListener('click', function() {
      infoPalacio.open(map, marker);
    });

}
