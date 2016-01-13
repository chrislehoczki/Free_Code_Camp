var calc = []; // creates new array for adding values to
var joined; // create var string for joined array so eval method can be used

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

$(".expressions").click(function() {
  calc.push($(this).text());
});

// reduces array to 0 to start new calculation
$(".clear").click(function() {
  calc.length = 0;
  $("#screen").html("");
});

$(".CE").click(function() {
  calc.pop(calc[calc.length-1]);
  $("#screen").html("");
});


$("#decimal").click(function() {
  $("#screen").append($(this).text());
  calc.push($(this).text());
});



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