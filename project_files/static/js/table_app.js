var button = d3.select('#filter-btn');
button.on("click", loadTable);


function loadTable() {
  d3.event.preventDefault();
  d3.select("tbody")
    .html("")

  //build API to get data
  var start = d3.select('#start').node().value;
  var month = d3.select('#month').node().value;
  var destination = d3.select('#destination').node().value;
  switch (destination.value) {
    case 'U.S.':
      destination = 'US';
      break;
    case 'Canada':
      destination = 'CA';
      break;
    case 'Mexico':
      destination = 'MX';
      break;
    case 'Puerto Rico':
      destination = 'PR';
      break;
    case 'Cuba':
      destination = 'CU';
      break;
    case 'Iceland':
      destination = 'IS';
      break;
    case 'United Kingdom':
      destination = 'UK';
      break;
    case 'Australia':
      destination = 'AU';
      break;
    case 'Italy':
      destination = 'IT';
      break;
    case 'Germany':
      destination = 'DE';
      break;
  }
  var api_url = `https://www.skyscanner.com/g/browseservice/dataservices/browse/v3/bvweb/US/USD/en-US/destinations/${start}/${destination}/${month}/?profile=minimalcityrollupwithnamesv2&include=image&apikey=8aa374f4e28e4664bf268f850f767535`

  //load data from api
  fetch(api_url)
    .then(data => {return data.json() })
    .then(response => {
      let places = response.PlacePrices;
      // We want images
      let placesWithImage = places.filter(x => (typeof (x.ImageUrl) !== 'undefined') )

      // We want direct prices
      console.log(placesWithImage)
      let placeswithImagesandDirectPrices = placesWithImage.filter(x => (typeof (x.DirectPrice) !== 'undefined') && x.DirectPrice !== 0  )
      
      d3.select("tbody")
      .selectAll("tr")
      .data(placeswithImagesandDirectPrices)
      .enter()
      .append("tr")
      .html(function (d) {
          places.IndirectPrice = +places.IndirectPrice;
          places.DirectPrice = +places.DirectPrice;

          let indirectPriceOutcome = "Moose";

          if( typeof(d.IndirectPrice) == "undefined") {
             indirectPriceOutcome = "NA"
          } else { 
             indirectPriceOutcome =  "$" + d.IndirectPrice
          }
          return `<td>${d.Name}</td><td>1+ stop: <strong>${indirectPriceOutcome}</strong> / Direct: $<strong>${d.DirectPrice}</strong></td>`;
  });  // end html load   

    }); //end fetch

}; //end load table function

function reloadTable() {
  d3.event.preventDefault();
  console.log("Reload function is being called")
  // select the input fields  value 
  let fieldValue = d3.select("#filter-btn").node().value
  // call loadTable passing in that value
  loadTable(fieldValue)
}

state.addEventListener('change', loadTable, false);

