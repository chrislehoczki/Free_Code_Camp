

function smallestCommons(arr) {
  arr.sort(function(a, b){return b-a}); // sorts array largest to smallest
  console.log(arr);
  var ifFunction = [];
  for (i=arr[0]; i > 0; i--) { // for each number from largest to smallest, push the if function condition on to an array
    ifFunction.push("j % " + i + " === 0");
  }
  console.log(ifFunction)
  ifFunction = ifFunction.join(",");  // join if function
  ifFunction = ifFunction.replace(/,/g, " && ") // replace commas with && for if function to work
  console.log(ifFunction)
  
  
  function lcm() {
for (j=1; j < 1000000; j++) {
  if (eval(ifFunction)) { // use eval to use string as code.
    console.log(j);
    return j;
  }
}
  }

  return lcm(); 
}


smallestCommons([1,5]);

