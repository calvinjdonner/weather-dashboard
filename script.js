var currentDate = moment().format('M/DD/YYYY');
var displayCity = $("#display-city");
var selectedCity = $("#austin")[0].outerText;
var weather = {
    "apiKey": "1a0ab489aaca085005fda81811f9c8cc"
}

$("#austin").on("click", function() {
    displayCity.text(selectedCity + " (" + currentDate + ")");
    console.log(displayCity);
    console.log($("#austin")[0].outerText);
}) //how to make this function apply to all buttons? 


var searchCity = function() {
    var searchTerm = document.getElementById("display-city").value;
fetch("https://api.openweathermap.org/data/2.5/onecall?lat= {lat} &lon= {lon} &exclude={part} &appid=1a0ab489aaca085005fda81811f9c8cc")

console.log($("#display-city").value)
.then(function(response) {
    return response.json();
})
}


//for loop to display emojis based on weather conditions. Need emoji in #display-city, and in each card under the anchor element

//how to handle search function? Create cities array with listed cities as well as any search terms? 

//open weather API uses lat/lon. Google maps platform using reverse geocoding (address lookup) ??? 

//fetch("https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters") use locality for address type