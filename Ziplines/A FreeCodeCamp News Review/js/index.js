// function to reduce title string if too long to fit div
function reduceString(string) {
  if (string.length < 28) {
    return string;
  }
  else {
 return string.substr(0,28) + "...";
    }
}

//function to convert date from number to presentable string
function convertDate(date) {
var formatDate = new Date(date);
console.log(formatDate);

  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  
var dateValues = [
  formatDate.getDate() + "th",
  monthNames[formatDate.getMonth()],
  formatDate.getFullYear(),
];

return dateValues.join(" "); 
  }


// AJAX REQUEST

$.getJSON( "http://www.freecodecamp.com/news/hot", function(data) {
  for (i=0; i < 20; i++) { // loop to go through 20 news articles
  var html = "";
  html += "<div class='story'> <ul>";
  html += "<li class='image'><img src=" + data[i].author.picture + "></li>";
  html += "<li class='title'><a target='_blank' href='" + data[i].link + "'>" + reduceString(data[i].headline) + "</a></li>";
  html += "<li class='left'><a target='_blank' href=http://freecodecamp.com/" + data[i].author.username + ">" + data[i].author.username + "</a></li>";
  html += "<li class='right'> &#10084  " + data[i].rank + "</li>";
  html += "<li class='clear'>" + convertDate(data[i].timePosted) + "</li>";
  html += "</ul> </div>"
  $("#stories").append(html);
  }
});