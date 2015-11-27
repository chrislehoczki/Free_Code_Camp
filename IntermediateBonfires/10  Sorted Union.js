
function unite(arr1, arr2, arr3) {
  var finalArray = [];
  console.log(finalArray)
  
  var args = Array.prototype.slice.call(arguments, 0);
  console.log(args)
  
  var flattened = (args).reduce(function(a, b) {
  return a.concat(b);
}, []);
  console.log(flattened)
 
  for (i=0; i < flattened.length; i++) { // loops through each number
   
    var indexValue = flattened[i];
    console.log(indexValue)
    
    if (finalArray.indexOf(indexValue) < 0) { // if final array doesn't contain number, push it.
     finalArray.push(indexValue)  
    }
  }
   return finalArray;
    console.log(finalArray);
    
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])