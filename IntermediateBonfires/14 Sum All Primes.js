

function sumPrimes(num) {
  
  var total = 0; // variable total to add prime number to
  
  // function that tests for prime number and adds it to total
  function primeTest(number) { 
for (j=2; j < number; j++) { //start at 2 as dividing by 1 is irrelevant
if (number % j === 0) { // if remainder of division is 0 - it is divisible by a number, and not prime
  console.log("divisible by" + i);
  console.log("NOT PRIME");
  return false; // exits loop as soon as finds a number it is divisible by
}
}
  total = total + number; // if all numbers dont divide - it is prime - add the number to the total
  return true;
  };
  
  for (i=2; i<=num; i++){ // for loop to check each number for prime up to given number
    primeTest(i); // test each number (if prime, is added to total)
    }
  console.log(total);
  return total;
}

sumPrimes(10);