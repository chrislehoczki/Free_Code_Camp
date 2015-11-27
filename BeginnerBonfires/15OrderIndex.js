function where(arr, num) {
  // Find my place in this sorted array.
  console.log(arr);
  console.log(num);
  var newArray = arr.push(num);
  console.log(newArray);
   arr.sort(function(a, b)
           {return a-b}
          );
  return arr.indexOf(num);
}



where([40, 60], 50, "");