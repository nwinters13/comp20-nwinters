
/*
 * createMap finds my location and augments the map options then
 * places me on the map and calls the station loader
 */
function createMap()
{
    navigator.geolocation.getCurrentPosition(function getPosition(position){
      myLat = position.coords.latitude;
      myLng = position.coords.longitude;
    
      var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(myLat, myLng)
      }; 
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      myMarker = new google.maps.Marker({
        title: "You are here",
        position: mapOptions.center
      });
      myMarker.setMap(map); 
      var infoWindow = new google.maps.InfoWindow();
      google.maps.event.addDomListener(myMarker,'click', function setWindow() {
        infoWindow.setContent("I am here at: " + myLat + " " + myLng);
        infoWindow.open(map, myMarker);
      });
      createStation(map);
    });
}

//google.maps.event.addDomListener(window, 'load', createMap);


/*
 * createStation gets the request from the json and then figures out which
 *   line needs to be displayed
 */
function createStation(map)
{
  var request = new XMLHttpRequest();
  request.open('GET', 
              'http://mbtamap.herokuapp.com/mapper/rodeo.json', 
               false);
  request.send(null)
  var response = request.responseText;
  console.log(response);
  var parsedResponse = JSON.parse(response);
  console.log(parsedResponse['line']);
  if(request.status == 500){
    alert("Error: Could not retrieve data from server");
    return;
  }
  buildStations(map);
  if(parsedResponse['line'] == "orange")
    showOrange(map);
  else if(parsedResponse['line'] == "blue")
    showBlue(map);
  else if(parsedResponse['line'] == "red")
    showRed(map);
}

/*
 * showOrange loops through the orange array within the lines object
 *   and puts on the trains information on the map
 */
function showOrange(map)
{
  console.log("IN ORGAN");
  var stationLocations = new Array(lines.Orange.length);
  orangeinfoWindow = new Array(lines.Orange.length);
  orangeMarkers = new Array(lines.Orange.length);
  for(var i = 0; i < lines.Orange.length; i++){
    orangeMarkers[i] = new google.maps.Marker({
      icon: 'icon.png'
    })
    orangeMarkers[i].setPosition({
      lat: Number(lines.Orange[i].lat),
      lng: Number(lines.Orange[i].lng),
    })
    orangeMarkers[i].setMap(map);
    stationLocations[i] = new google.maps.LatLng(lines.Orange[i].lat, lines.Orange[i].lng);

    orangeinfoWindow[i] = new google.maps.InfoWindow();
    orangeinfoWindow[i].setPosition({
      lat: Number(lines.Orange[i].lat),
      lng: Number(lines.Orange[i].lng)
    })
    google.maps.event.addDomListener(orangeMarkers[i],'click', function setWindow() {
      console.log(i);
      orangeinfoWindow[i].setContent('oragnelife');
      orangeinfoWindow[i].open(map, orangeMarkers[i]);
      });
  }
  var lineDrawing = new google.maps.Polyline({
    path: stationLocations,
    geodesic: true,
    strokeColor: '#ff6600',
    strokeWeight: 10,
  });
  lineDrawing.setMap(map);
}


/*
 * showRed loops through the orange array within the lines object
 *   and puts on the trains information on the map
 */
function showRed(map)
{
  console.log("IN RED");
  var stationLocations = new Array(lines.Red.length);
  redMarkers = new Array(lines.Red.length);
  redinfoWindow = new Array(lines.Red.length);
  for(var i = 0; i < lines.Red.length; i++){
    var marker = new google.maps.Marker({
      icon: 'icon.png'
    })
    redMarkers[i].setPosition({
      lat: Number(lines.Red[i].lat),
      lng: Number(lines.Red[i].lng),
    });
    redMarkers[i].setMap(map);
    stationLocations[i] = new google.maps.LatLng(lines.Red[i].lat, lines.Red[i].lng);
    redinfoWindow[i] = new google.maps.InfoWindow();
    redinfoWindow[i].setPosition({
      lat: Number(lines.Red[i].lat),
      lng: Number(lines.Red[i].lng)
    })
    google.maps.event.addDomListener(redMarkers[i],'click', function setWindow() {
      redinfoWindow[i].setContent('woahdere');
      redinfoWindow[i].open(map, redMarkers[i]);
      });
  }
  var lineDrawing = new google.maps.Polyline({
    path: stationLocations,
    geodesic: true,
    strokeColor: '#ff0000',
    strokeWeight: 10,
  });
  lineDrawing.setMap(map);
}


/*
 * showBlue loops through the orange array within the lines object
 *   and puts on the trains information on the map
 */
function showBlue(map)
{
  console.log("IN BLUE");
  var stationLocations = new Array(lines.Blue.length);
  var blueinfoWindow = new Array(lines.Blue.length);
  blueMarkers = new Array(lines.Blue.length);
  for(var i = 0; i < lines.Blue.length; i++){
    blueMarkers[i] = new google.maps.Marker({
      icon: 'icon.png',
    });
    blueMarkers[i].setPosition({
      lat: Number(lines.Blue[i].lat),
      lng: Number(lines.Blue[i].lng),
    });
    blueMarkers[i].setMap(map);
    stationLocations[i] = new google.maps.LatLng(lines.Blue[i].lat, lines.Blue[i].lng);
    blueinfoWindow[i] = new google.maps.InfoWindow();
    blueinfoWindow[i].setPosition({
      lat: Number(lines.Blue[i].lat),
      lng: Number(lines.Blue[i].lng)
    })
    google.maps.event.addDomListener(blueMarkers[i],'click', function setWindow() {
      blueinfoWindow[i].setContent('hi');
      blueinfoWindow[i].open(map, blueMarkers[i]);
      });
  }
  var lineDrawing = new google.maps.Polyline({
    path: stationLocations,
    geodesic: true,
    strokeColor: '#3300CC',
    strokeWeight: 10,
  });
  lineDrawing.setMap(map);
}


function buildStations(map)
{
  str = 'Blue,Bowdoin,42.361365,-71.062037*' +
    'Blue,Government Center,42.359705,-71.05921499999999*' +
    'Blue,State Street,42.358978,-71.057598*' +
    'Blue,Aquarium,42.359784,-71.051652*' +
    'Blue,Maverick,42.36911856,-71.03952958000001*' +
    'Blue,Airport,42.374262,-71.030395*' + 
    'Blue,Wood Island,42.3796403,-71.02286539000001*' +
    'Blue,Orient Heights,42.386867,-71.00473599999999*' +
    'Blue,Suffolk Downs,42.39050067,-70.99712259*' +
    'Blue,Beachmont,42.39754234,-70.99231944*' +
    'Blue,Revere Beach,42.40784254,-70.99253321*' +
    'Blue,Wonderland,42.41342,-70.991648*' +
    'Orange,Oak Grove,42.43668,-71.07109699999999*' +
    'Orange,Malden Center,42.426632,-71.07411*' +
    'Orange,Wellington,42.40237,-71.077082*' +
    'Orange,Sullivan,42.383975,-71.076994*' +
    'Orange,Community College,42.373622,-71.06953300000001*' +
    'Orange,North Station,42.365577,-71.06129*' +
    'Orange,Haymarket,42.363021,-71.05829*' +
    'Orange,State Street,42.358978,-71.057598*' +
    'Orange,Downtown Crossing,42.355518,-71.060225*' +
    'Orange,Chinatown,42.352547,-71.062752*' +
    'Orange,Tufts Medical,42.349662,-71.063917*' +
    'Orange,Back Bay,42.34735,-71.075727*' +
    'Orange,Mass Ave,42.341512,-71.083423*' +
    'Orange,Ruggles,42.336377,-71.088961*' +
    'Orange,Roxbury Crossing,42.331397,-71.095451*' +
    'Orange,Jackson Square,42.323132,-71.099592*' +
    'Orange,Stony Brook,42.317062,-71.104248*' +
    'Orange,Green Street,42.310525,-71.10741400000001*' +
    'Orange,Forest Hills,42.300523,-71.113686*' +
    'Red,Alewife,42.395428,-71.142483*' +
    'Red,Davis,42.39674,-71.121815*' +
    'Red,Porter Square,42.3884,-71.11914899999999*' +
    'Red,Harvard Square,42.373362,-71.118956*' +
    'Red,Central Square,42.365486,-71.103802*' +
    'Red,Kendall/MIT,42.36249079,-71.08617653*' +
    'Red,Charles/MGH,42.361166,-71.070628*' +
    'Red,Park Street,42.35639457,-71.0624242*' +
    'Red,Downtown Crossing,42.355518,-71.060225*' +
    'Red,South Station,42.352271,-71.05524200000001*' +
    'Red,Broadway,42.342622,-71.056967*' +
    'Red,Andrew,42.330154,-71.057655*' +
    'Red,JFK/UMass,42.320685,-71.052391*' +
    'Red,Savin Hill,42.31129,-71.053331*' +
    'Red,Fields Corner,42.300093,-71.061667*' +
    'Red,Shawmut,42.29312583,-71.06573796000001*' +
    'Red,Ashmont,42.284652,-71.06448899999999*' +
    'Red,North Quincy,42.275275,-71.029583*' +
    'Red,Wollaston,42.2665139,-71.0203369*'
    'Red,Quincy Center,42.251809,-71.005409*' +
    'Red,Quincy Adams,42.233391,-71.007153*' +
    'Red,Braintree,42.2078543,-71.0011385';

  lines = {
    Red: [],
    Blue: [],
    Orange: []
  };

   var splitString = str.split("*");
   
   for (var i = splitString.length - 1; i >= 0; i--) {
        var lineSplit = splitString[i].split(",");
        var lineInfo = {stationInfo: lineSplit[1],
                        lat: (lineSplit[2]),
                        lng: (lineSplit[3])};
        if(lineSplit[0] == "Red")                
          lines.Red.push(lineInfo);
        if(lineSplit[0] == "Blue")
          lines.Blue.push(lineInfo);
        if(lineSplit[0] == "Orange")
          lines.Orange.push(lineInfo);
    }
}



function calculateDistance()
{
  var R = 6371; // km
  var dLat = (myLat-stationLat).toRad();
  var dLon = (myLng-stationLng).toRad();
  var myLat = myLat.toRad();
  var lat2 = lat2.toRad();

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  }