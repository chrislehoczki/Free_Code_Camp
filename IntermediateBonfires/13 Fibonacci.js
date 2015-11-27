// Create array of fibonacci numbers
// Find ones not divisible by 2
// Push to array
// add all items in array
function sumFibs(num) {
  // create fibbonacci sequence up to number
  var fibon = [1,1]
  console.log(num);
  for (i=2; i<=num; i++) {
    console.log(i);
    // keep going while less than number
    if (fibon[fibon.length-1] < num) {
    fibon.push(fibon[i-2] + fibon[i-1]);
      }
  }
  console.log(fibon)
  // if last number overrun, pop it off
  if (fibon[fibon.length-1] > num) {
  fibon.pop(0);
    }
  console.log(fibon);
  // get all odd number
  var array = [];
  for (i=0; i<fibon.length; i++) {
    if (fibon[i] % 2 !== 0) {
      array.push(fibon[i]);
    }
  }
  // add all numbers on array together
  console.log(array)
  array = array.reduce(function(a,b) {
      return a + b;
     })
  console.log(array)
  return array;
}

sumFibs(25);

//RAFAESE SOLUTION WITH MY COMMENTS

function sumFibs(num) {
    var prevNumber = 0; //starting values
    var currNumber = 1; //starting values 
    var result = 0; // variable to give at end
    while (currNumber <= num) { // while number testing is less than or equal to number given
        if (currNumber % 2 !== 0) { //if current is odd, add it to result
            result += currNumber;  
        }  
        var added = currNumber + prevNumber; // added is next fibonacci number
        prevNumber = currNumber; //update previous number to become current number (shift if back)
        currNumber = added; // current number becomes the sum of previous number and current number
    }

    return result;
}

