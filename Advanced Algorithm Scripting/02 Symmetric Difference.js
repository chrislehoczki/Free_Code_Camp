function sym(args) {

  var arguments = Array.prototype.slice.call(arguments); //turn args into array

  var newArray = []; //declare new array to store data

  arguments.reduce(function(a, b) {

    newArray = []; //clear array to store new data

    for (i = 0; i < a.length; i++) { // check values from array1 on array2
      if (b.indexOf(a[i]) < 0) {
        newArray.push(a[i])
      }
    }
    // check values from array2 on array1
    for (i = 0; i < b.length; i++) {
      if (a.indexOf(b[i]) < 0) {
        newArray.push(b[i])
      }
    }
    return newArray; // return new array for next loop
  });
  return newArray; // return newarray when finished

}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5])