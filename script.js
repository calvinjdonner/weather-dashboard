var currentDate = moment().format('M/DD/YYYY');
var displayCity = $("#display-city");

$(".cities").click(function() {
    var selectedCity = this.outerText;
    displayCity.text(selectedCity + " (" + currentDate + ")");
});

var cityWeather = {
    apiKey: "1a0ab489aaca085005fda81811f9c8cc",
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayCoordinates: function(data) {
        const { lon, lat } = data.coord;
        var coordinates = lon && lat;
        console.log(coordinates);
        }
};

var weather = {
    apiKey: "1a0ab489aaca085005fda81811f9c8cc",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&units=imperial&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { temp, wind_speed, humidity, uvi, } = data.current;
        const { icon } = data.weather[0];
        console.log(temp, wind_speed, humidity, uci, icon);
    }
};

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