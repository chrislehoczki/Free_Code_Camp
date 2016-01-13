

// create functon to get JSON, insert html, and create search button click handlers
function getJSON(username)  {
var name = username;
var html = "";
  
//FIRST JSON - channel info
$.getJSON('https://api.twitch.tv/kraken/channels/' + name + '?callback=?', function(channel) {
  
// If user is not present, return message placeholder.
   if (channel.status === 422) {
    console.log(channel.message);
     html += "<ul class='stream inactive' id=" + name + "><li>" + name + " is not on Twitch.TV</li> </ul>";
     $("#app").append(html);
     return;
  }
  
//Add channel picture if present, if not, add a custom picture. Also add ID as display name for search purposes
if (channel.logo) {
    html += "<ul class='stream' id='" + channel.display_name + "'>";
      
    html +=  "<li> <img class='logo' src=" + channel.logo +"></li>";
   }
  else {
     html += "<ul class='stream' id='" + channel.display_name + "'> <li> <img class='logo' src='http://blog.cphillips.co.uk/wp-content/uploads/2015/11/9ML7MMR8T5.jpg'></li>"  
  }
  
//Add name
  
  html += "<ul> <a target='_blank' href=" + channel.url + "><li> <p class='displayName'>" + channel.display_name + "</p></a>";
  
//JSON 2 - get stream info.
  
  $.getJSON('https://api.twitch.tv/kraken/streams/' + name + '?callback=?', function(stream) {
  //If not streaming, cross picture.
    if (stream.stream === null) {
      html += "</li><li class='displayimage'><img class='activityDisplay offline' src= 'https://cdn2.iconfinder.com/data/icons/fugue/bonus/icons-32/cross.png'></li></ul>"
   
    }
    //otherwise it is a tick and add status
    else {
      html += "<p class='status'>" + stream.stream.channel.status + "</p></li></ul>"
      html += "<a target='_blank' href=" + stream.stream.channel.url + "><li class='displayimage'><img class='activityDisplay online' src=    'https://cdn2.iconfinder.com/data/icons/fugue/bonus/icons-24/tick.png'></li></a></ul>"

    }
  // append HTML to app
  $("#app").append(html);
    
   // CREATE SEARCH FUNCTION AFTER AJAX REQUESTS 
// declare searchterm variable
var searchTerm; 
// get all streams in array
var ulArray = document.getElementsByClassName("stream");

// search box keyup handler
$("#target").keyup(function() {
  searchTerm = $("#target").val(); // get value of search box

// Loop through array and if substr matches search term, display block, otherwise, display hidden.
  for (i=0; i<ulArray.length; i++) {
    if (ulArray[i].id.toLowerCase().substr(0,searchTerm.length) !== searchTerm) {
document.getElementById(ulArray[i].id).style.display ="none";
    } 
    else if (ulArray[i].id.toLowerCase().substr(0,searchTerm.length) === searchTerm) {
      document.getElementById(ulArray[i].id).style.display = "block";
    }
  }
});
    // BREAK FROM SEARCH BUTTON
    
    // ATTACH EVENT HANDLER TO BUTTONS
// declare stream variables
  var $online = $(".online").parent().parent().parent() // all online user streams
  var $offline = $(".offline").parent().parent().parent() // all offline user streams
// ALL USERS BUTTON
$("#allusers").click(function() {
    $(".inactive").show(); // show inactive members
    $(".stream").show();  // show all streams
    });
// OFFLINE BUTTON
$("#offline").click(function() {
    $(".inactive").hide(); // hide inactive
    $online.hide();
    $offline.show();  
    });
// ONLINE BUTTON
  $("#online").click(function() {
    $(".inactive").hide(); // hide inactive
    $online.show();
    $offline.hide();
    });
    
    //END OF BUTTONS
    
  }); // END OF SECOND AJAX REQUEST
});; // END OF FIRST AJAX REQUEST
 
  }; // END OF AJAX FUNCTION

// ON DOCUMENT LOAD
// declare array of users to get info for
var users = ["medrybw", "freecodecamp", "storbeck", "habathcx","RobotCaleb", "RobotCale", "syndicate", "terakilobyte", "brunofin", "comster404"];

// for each user, get their info and display.
for (i=0; i < users.length; i++) {
  getJSON(users[i]);
}