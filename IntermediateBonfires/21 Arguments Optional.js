

function add() {
  
  for (i=0; i < arguments.length; i++) // checks if values are numbers, return undefined if not
  if (typeof arguments[i] !== "number") {
    console.log("Not a number");
    return;
  }
  
 if (arguments.length > 1) { // if more than one number, get sum
  console.log(arguments[0] + arguments[1])
  return arguments[0] + arguments[1];
   }

   //OTHERWISE
  
  var firstNumber = arguments[0]; //declare argument from first function as variable.
  console.log(firstNumber);
  
  return function() { // return another function
     for (i=0; i < arguments.length; i++) // checks if values are numbers again
  if (typeof arguments[i] !== "number") {
    console.log("Not a number");
    return;
  }
    console.log(firstNumber);
    console.log(firstNumber + arguments[0])
    return firstNumber + arguments[0]; // if value is number, adds the value from first function to argument in second
  };
 
  
}

add(3)(2);
