// L.mapbox.accessToken = 'pk.eyJ1IjoiY2FybHlyZyIsImEiOiJjam0ydTJxdXkxMXczM3FteW4ycGlyNXltIn0.ccK2PeHX5df2iySbnnj33w';

const API_KEY = "pk.eyJ1IjoiY2FybHlyZyIsImEiOiJjam0ydTJxdXkxMXczM3FteW4ycGlyNXltIn0.ccK2PeHX5df2iySbnnj33w";
const data = 'dataset.js';
const start_point = [39.86169815, -104.6729965]

var myMap = L.map("map", {
  center: [38, -55],
  zoom: 2
});

let base_layer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 35,
  id: "mapbox.light",
  accessToken: API_KEY
})

base_layer.addTo(myMap)

// layer groups for later on
let UnitedAirlines = L.layerGroup().addTo(myMap)
let Southwest = L.layerGroup().addTo(myMap)
let Frontier = L.layerGroup().addTo(myMap)
let AirTran = L.layerGroup().addTo(myMap)
let GreatLakes = L.layerGroup().addTo(myMap)
let Delta = L.layerGroup().addTo(myMap)
let other = L.layerGroup().addTo(myMap)
let domestic = L.layerGroup().addTo(myMap)
let international = L.layerGroup().addTo(myMap)

// United airlines
function UARoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let airline = feature.properties.airline;
    if (airline == "United Airlines") {
      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: 'blue',
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(UnitedAirlines)

      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "</p>")
        .addTo(myMap)
      locationMarker.addTo(UnitedAirlines)  
      }
      
    }
  } // end increment thing

UARoutes(dataset)

//Southwest layer
function SWRoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let airline = feature.properties.airline;
    if (airline == "Southwest Airlines") {

      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: "red",
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(Southwest)
      
      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "</p>")
        .addTo(myMap)
      locationMarker.addTo(Southwest)  
    }
  } // end increment thing
}
SWRoutes(dataset)

//Frontier layer
function FrontierRoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let airline = feature.properties.airline;
    if (airline == "Frontier Airlines") {

      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: "green",
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(Frontier)
      
      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "</p>")
        .addTo(myMap)
      locationMarker.addTo(Frontier)  
    }
  } // end increment thing
}
FrontierRoutes(dataset)


//AirTran Airway layer
function AirTranRoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let airline = feature.properties.airline;
    if (airline == "AirTran Airways") {

      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: "orange",
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(AirTran)
      
      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "</p>")
        .addTo(myMap)
      locationMarker.addTo(AirTran)  
      
    }
  } // end increment thing
}
AirTranRoutes(dataset)


//GreatLakes layer
function GLRoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let airline = feature.properties.airline;
    if (airline == "Great Lakes Airlines") {

      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: "#2EFBEF",
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(GreatLakes)
      
      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "</p>")
        .addTo(myMap)
      locationMarker.addTo(GreatLakes)  
    }
  } // end increment thing
}
GLRoutes(dataset)

function DeltaRoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let airline = feature.properties.airline;
    if (airline == "Delta Air Lines") {

      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: "purple",
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(Delta)
      
      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "</p>")
        .addTo(myMap)
      locationMarker.addTo(Delta)  
    }
  } // end increment thing
}
DeltaRoutes(dataset)

//other layer
function otherRoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let airline = feature.properties.airline;
    if (airline != "Great Lakes Airlines" && airline != "United Airlines" && airline != "Southwest Airlines" && airline != "AirTran Airlines" && airline != "Frontier Airlines"){

      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: "yellow",
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(other) 

      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "</p>")
        .addTo(myMap)
      locationMarker.addTo(other)  
    }
  } // end increment thing
}
otherRoutes(dataset)

function DomesticRoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let country = feature.properties.end_country;
    if (country == "United States"){ 

      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: "red",
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(domestic)
      
      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "</p>")
        .addTo(myMap)
      locationMarker.addTo(domestic)  
    }
  } // end increment thing
}
DomesticRoutes(dataset)

function IntlRoutes(data) {
  var features = data.features;
  for (i = 0; i < features.length; i += 1) {
    feature = features[i];
    let country = feature.properties.end_country;
    if (country != "United States") {

      var line = [start_point, [feature.properties.end_lat, feature.properties.end_long]]
      let myline = L.polyline(line, {
        color: "blue",
        weight: '1.5px'
      }).addTo(myMap)
      myline.addTo(international)
      
      let locationMarker = L.circleMarker([feature.properties.end_lat, feature.properties.end_long], {
        color: 'white',
        fillColor: 'white',
        fillOpacity: .1,
        radius: 3
      })
        .bindPopup("<p style = 'color:black'>" + feature.properties.end_airport_name + "<br>" + "Country: " + feature.properties.end_country + "</p>")
        .addTo(myMap)
      locationMarker.addTo(international)  
    }
  } // end increment thing
}
IntlRoutes(dataset)


// select airline control
let overlayMaps = {
  "United Airlines": UnitedAirlines, 
  "Southwest": Southwest,
  "Frontier" : Frontier,
  "Great Lakes": GreatLakes,
  "Air Tran": AirTran,
  "Delta": Delta,
  "Other": other,
  "Domestic": domestic,
  "International": international
}

// let layerControl = {
//   "Domestic": domestic,
//   "International": international
// };

L.control.layers(null, overlayMaps).addTo(myMap)