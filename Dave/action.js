$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.

	if ($(window).scrollTop() > 100 ){

 		$('#nav').addClass('show');

  } else {

    $('#nav').removeClass('show');

 	};
});

function initMap() {
  var MI = {lat: 19.4270245, lng: -99.1676647};
  var PB = {lat: 19.4352, lng: -99.1433887};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: MI,
    mapTypeId: 'hybrid',
  });

  var contentStringMI = '<div id="infomap">'+
      '<div id="siteNotice">'+
      '<video id="IMGR" src="img/MI.mp4" autoplay loop width="150px" muted></video>'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Monumento a la Independencia</h1>'+
      '<div id="bodyContent">'+
      '<p><b>El Monumento a la Independencia, conocido popularmente como El Ángel o El Ángel de la Independencia, se encuentra en la Ciudad de México, en la glorieta localizada en la confluencia de Paseo de la Reforma, Río Tiber y Florencia. Inaugurado en 1910 para conmemorar el Centenario de la independencia de México por el entonces presidente de México, Porfirio Díaz, es uno de los monumentos más emblemáticos de la urbe y usado actualmente como un icono cultural de la Ciudad de México y lugar de festejos y manifestaciones nacionales.</p>'
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentStringMI
  });

  var markerMI = new google.maps.Marker({
    position: MI,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: 'MI (Ayers Rock)'
  });
  markerMI.addListener('click', function() {
    infowindow.open(map, markerMI);
  });


var contentStringPB = '<div id="infomap">'+
      '<div id="siteNotice">'+
      '<video id="IMGR" src="img/MI.mp4" autoplay loop width="150px" muted></video>'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Palacio de Bellas Artes</h1>'+
      '<div id="bodyContent">'+
      '<p><b>l Palacio de Bellas Artes es un centro cultural ubicado en el Centro Histórico de la Ciudad de México. Considerado como la casa máxima de la expresión de la cultura, es el teatro lírico más relevante y el centro más importante del país dedicado a todas las manifestaciones de las bellas artes. La Unesco lo declaró monumento artístico en 1987.</p><a href="../Aarón/bellasArtes.html"><p>Más Información</p></a>'
      '</div>';

var infowindow = new google.maps.InfoWindow({
  content: contentStringPB
});

var markerPB = new google.maps.Marker({
  position: PB,
  map: map,
  animation: google.maps.Animation.BOUNCE,
  title: 'PB (Ayers Rock)'
  });
  markerPB.addListener('click', function() {
    infowindow.open(map, markerPB);
  });
}
