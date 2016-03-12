$(document).ready(function() {
    // VARIABLES
var country;
var city;
//variables to change on button press
var units = "&units=metric"; 
var speedUnits = "m/s"
var tempUnits = "&degC"
//html to populate
var html;

//FUNCTIONS
//converts degrees into bearing
function convertWindDirection(dir) {
  var rose = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  var eightPoint = Math.floor(dir / 45);
  return rose[eightPoint];
}

// ajax for location and weather, then populates html
function JSONHTML() {
      $.getJSON("http://ip-api.com/json", function(json) { // GETJSON1 - Country
      country = json.countryCode;
      city = json.city;
      console.log(city);


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + json.city + units + "&mode=JSON&APPID=24a6bf6f2455a2e8d495dcf5f3f1c45b", function(json) { // GETJSON2 - Get weather data
  //define html and add headers
     html = "";
     html += "<h1> FreeCodeCamp Zipline </h1>";
     html += "<h2> Weather App </h2>";
  //create buttons
   html += "<button id='C' class='btn btn-primary'> Metric </button>";
   html += "<button id='F'class='btn btn-primary'> Imperial </button>";
  
  // add weather information
     html += "<ul> <li> <img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'> </li>";
     html += "<li>" + json.main.temp + tempUnits + "</li> </ul>";
     html += "<ul> <li>" + city + ", " + country + "</li>";
     html += "<li>" + json.weather[0].main + "</li>";
     html += "<li>" + convertWindDirection(json.wind.deg) + " " + Math.floor(json.wind.speed) + speedUnits + "</li></ul>";
     // add HTML to weatherapp
  $(".weatherapp").html(html);
 // set up event handlers for buttons
      $("#C").on("click", function(){
     units = "&units=metric";
     tempUnits = "&degC";
     speedUnits = "m/s"
     JSONHTML(); // run ajax based on variables above
  });
 
  $("#F").on("click", function(){
     units = "&units=imperial";
     tempUnits = "&degF";
     speedUnits = "mph"
     JSONHTML(); // run ajax based on variables above
  });

  // CHANGE BACKGROUND COLOR BASED ON WEATHER DATA 
    // define key
  var weatherarray = [["Rain","http://blog.cphillips.co.uk/wp-content/uploads/2015/11/rain.jpg"], ["Clear", "http://blog.cphillips.co.uk/wp-content/uploads/2015/11/clear.jpg"], ["Clouds", "http://blog.cphillips.co.uk/wp-content/uploads/2015/11/clouds.jpg"], ["Scattered Clouds", "http://blog.cphillips.co.uk/wp-content/uploads/2015/11/clouds.jpg"], ["Storm", "http://blog.cphillips.co.uk/wp-content/uploads/2015/11/storm.jpg"], ["Thunderstorm", "http://blog.cphillips.co.uk/wp-content/uploads/2015/11/storm.jpg"], ["Snow", "http://blog.cphillips.co.uk/wp-content/uploads/2015/11/snow.jpg"], ["Mist", "http://blog.cphillips.co.uk/wp-content/uploads/2015/11/mist.jpg"]];
  // for loop to get color based on weather data.
    for (i=0; i < weatherarray.length; i++) {
      if (weatherarray[i].indexOf(json.weather[0].main) >= 0) {
        $(".weatherapp").css("background-image", "url(" + weatherarray[i][1] + ")");
      };
    };

  });

  });  
};

JSONHTML();// call the JSON function to start the page
});