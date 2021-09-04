var currentDate = moment().format('M/DD/YYYY');
var displayCity = $("#display-city");
var selectedCity = $("#austin")[0].outerText;

var cityWeather = {
    apiKey: "1a0ab489aaca085005fda81811f9c8cc",
    fetchWeather: function (displayCity) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + displayCity + "&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayCoordinates: function(data) {
        const { lon, lat } = data.coord;
        console.log(lon, lat);
    }
};

var weather = {
    "apiKey": "1a0ab489aaca085005fda81811f9c8cc",
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&units=imperial&appid=1a0ab489aaca085005fda81811f9c8cc")
            .then((response) => response.json())
            .then((data) => console.log(data));
    },

    displayWeather: function(data) {
        const { temp, wind_speed, humidity, uvi, } = data.current;
        const { icon } = data.weather;
        console.log(temp, wind_speed, humidity, uci, icon);
    }
};


$("#austin").on("click", function() {
    displayCity.text(selectedCity + " (" + currentDate + ")");
    console.log(displayCity);
    console.log($("#austin")[0].outerText);
    console.log(weather);
}) //how to make this function apply to all buttons? 


var searchCity = function() {
    var searchTerm = document.getElementById("display-city").value;

console.log($("#display-city").value)
.then(function(response) {
    return response.json();
})
}

//heebyjeeby

//for loop to display emojis based on weather conditions. Need emoji in #display-city, and in each card under the anchor element

//how to handle search function? Create cities array with listed cities as well as any search terms? 

//open weather API uses lat/lon. Google maps platform using reverse geocoding (address lookup) ??? 

//fetch("https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters") use locality for address type