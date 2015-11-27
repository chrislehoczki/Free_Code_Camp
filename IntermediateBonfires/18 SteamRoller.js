function steamroller(arr) {
  console.log(arr);
  var counter = 0; // set start counter

while (counter < arr.length) { 
    if (Array.isArray(arr[counter])) { // if an array
    console.log(" its an array");
     arr = arr.reduce(function(a, b) { // concat the array
  return a.concat(b);
}, []);  
      counter = 0; // start from beginning and do again = solves problems of nested arrays
      continue; // forces continue so not an infinite loop
  }
  counter +=1; // if not - just go to next value.
}
 
  
  console.log(arr)
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);
4