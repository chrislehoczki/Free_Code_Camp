// Working version with arrays

function drop(arr, func) {
  // Drop them elements.
  var array = [];
  for (i=0; i < arr.length; i++){
    console.log(arr[i]);
    console.log(func(arr[i]));
   if (func(arr[i]))
    {
     array.push(arr[i])
    }
}
  console.log(array);
  return array;
}

drop([1, 2, 3, 7, 4], function(n) {return n > 3});

//FUNCTIONAL VERSION WITH SHIFT - allows you to change array and then work with counter variable to work with different array lengths

function drop(arr, func) {
  // Drop them elements.
  var counter = 0;
while (counter < arr.length) {
   if (!func(arr[counter]))
    {
     arr.shift();
    }
  else {
      counter += 1;  
  }
  
}
  console.log(arr);
  return arr;
}

drop([1, 2, 3], function(n) {return n > 0; })