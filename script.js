var currentDate = moment().format('M/DD/YYYY');
var displayCity = document.getElementById("display-city"); //jQuery $ function not working, why???
var selectedCity = document.getElementById("austin");

$("#austin").on("click", function() {
    displayCity.textContent = selectedCity.textContent + " (" + currentDate + ")";
    console.log("austin was clicked");
}) //how to make this function apply to all buttons? 

