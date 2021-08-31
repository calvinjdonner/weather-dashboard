var currentDate = moment().format('M/DD/YYYY');
var displayCity = $("#display-city");

$("#austin").click(function(){
    displayCity.textContent = "Austin (" +currentDate + ")";
    console.log("austin was clicked");
})