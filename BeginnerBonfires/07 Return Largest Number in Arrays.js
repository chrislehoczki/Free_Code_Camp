function largestOfFour(arr) {
  // You can do this!
  
  var arrayFinal = [];
  
  for (var i = 0; i < arr.length; i++) {
    
  
    
    var sortOneArray = (arr[i].sort(function(a, b){return b-a}));
    
      
   
    var largest = sortOneArray[0];
    
    console.log(largest);
    
   arrayFinal.push(largest);
  }
  
  console.log(arrayFinal);
  
  return arrayFinal;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]], "");