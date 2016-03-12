var calc = []; // creates new array for adding values to
var joined; // create var string for joined array so eval method can be used

//CLICK ON A NUMBER

$(".numbers").click(function() {
  // function that uses if function to decide whether to clear display or add value.
  
  // If last entered digit = ".", add value and push onto array
  
  if (calc[calc.length-1] == ".")  {
    $("#screen").append($(this).text());
    calc.push($(this).text());
    return;
  }   

  // if last entered digit = Nan (expression) or the equals button has been pressed, clear screen and push onto array
   else if (isNaN(parseInt(calc[calc.length-1])) || ($("#screen").hasClass("finished")) ) { 
      $("#screen").html("");
      $("#screen").removeClass("finished");
      }
  // Otherwise it is number - add value to screen and push
  $("#screen").append($(this).text());
  calc.push($(this).text());
  
});

//CLICK ON AN EXPRESSION

$(".expressions").click(function() {
  calc.push($(this).text());
});

//CLEAR SCREEN
$(".clear").click(function() {
  calc.length = 0;
  $("#screen").html("");
});

//REMOVE LAST FROM MEMORY
$(".CE").click(function() {
  calc.pop(calc[calc.length-1]);
  $("#screen").html("");
});

//ADD DECIMAL
$("#decimal").click(function() {
  $("#screen").append($(this).text());
  calc.push($(this).text());
});


//EQUALS 
// Function to 
//1. Join array into string
//2. Evaluate String
//3. Display answer
//4. Clear calc array
//5. Addclass of finished so that screen is cleared on pressing new digit.
$("#equals").click(function() {
  joined = calc.join("");
  $("#screen").text(eval(joined));
  calc.length = 0;
  $("#screen").addClass("finished");
});