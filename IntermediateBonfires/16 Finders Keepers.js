function find(arr, func) {
 
  var filtered = arr.filter(func); // filter array by the function
  console.log(filtered)
  console.log(filtered[0]) // return first element 
  return filtered[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
