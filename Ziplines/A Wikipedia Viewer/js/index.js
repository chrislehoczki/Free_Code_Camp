
//FUNCTION TO GET LIST OF TITLES THAT MATCH QUERY AND POPULATE DATALIST
function dataList() {
$("datalist").html("");
var searchTerm = $("#search").val(); // get value of search box

  //AJAX REQUEST FOR TITLES
$.getJSON("https://en.wikipedia.org/w/api.php?format=json&&formatversion=2&callback=?&action=query&generator=search&gsrnamespace=0&gsrlimit=5&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + searchTerm, function(data) {
  console.log(data);
  $.each(data.query.pages, function(index) { //loop through each object, append title to datalist
  console.log(this.title)
  $("datalist").append("<option value='" + this.title + "'>")
});//end loop
});//end ajax callback

}//end function

function getArticles() {
  $("#articles").html(""); // remove any articles from last search
    $("datalist").html("");
      //GET INPUT AND CAPITALISE FIRST LETTERS
  var input = $("#search").val(); // get input
  $("#search").val(""); //clear value from searchbox

  var inputSplit = input.split(" ") // split input
      for (i=0; i < inputSplit.length; i++) { //array to replace first letter with capitalised
        inputSplit[i] = inputSplit[i].replace(inputSplit[i].charAt(0),(inputSplit[i].charAt(0).toUpperCase()));
        input = inputSplit.join(" ");
      }//end loop
       
  var searchFormatted = encodeURIComponent(input); //encode input as URL ready
  var html; //declare html variable
   
  //AJAX REQUEST FOR TITLE AND EXTRACT SENTENCE
$.getJSON("https://en.wikipedia.org/w/api.php?format=json&&formatversion=2&callback=?&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + searchFormatted, function(data) {
  console.log(data)
  for (i=0;i<10; i++) { //loop through 10 matching articles
    html = "";
    html += "<a target='_blank' href='http://en.wikipedia.org/?curid=" + data.query.pages[i].pageid + "'>";
    html += "<div class='article'><ul>";
    html += "<li><h1>" + data.query.pages[i].title + "</h1></li>"
    
    if (data.query.pages[i].extract.substr(0,18) !== "This is a redirect") { //if extract is a redirect notice, don't show
    html+= "<li>" + data.query.pages[i].extract + "</li>"
    }
    html += "</ul></div></a>"

  $("#articles").append(html); //append html to articles div
  }//end loop
});//end AJAX callback
  } //end function

// SEARCHBOX keyup handler
$("#search").keyup(function() {
  dataList(); 
});



// SEARCHBOX keypress
$("#search").keypress(function(e) {
    if(e.which == 13) { // if press enter
      getArticles();
 }// end of if
  });

// RANDOM ARTICLE click handler
$("#random").click( function() {
   window.open("https://en.wikipedia.org/wiki/Special:Random")
})

$("#brain").click(function() {
  $("#viewer").fadeIn();
  $("#start").slideToggle("slow");
})