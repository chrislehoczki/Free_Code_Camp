function diff(arr1, arr2) {
  var newArr = [];
 
  // Check array 1 against array 2
// Push any numbers on to blank array
  for (i=0; i<arr1.length; i++) {
  console.log(arr2.indexOf(arr1[i]))
  if (arr2.indexOf(arr1[i]) < 0) {
    newArr.push(arr1[i]);
  }
}
  // Check array 2 against array 1 
// Push any numbers on to blank array.
  
   for (i=0; i<arr2.length; i++) {
  console.log(arr1.indexOf(arr2[i]))
  if (arr1.indexOf(arr2[i]) < 0) {
    newArr.push(arr2[i]);
  }
}
  console.log(newArr);
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// SIMPLER WITH FUNCTION

function diff(arr1, arr2) {
  var newArr = [];

  function check(array1,array2) {
      for (i=0; i<array1.length; i++) {
  if (array2.indexOf(array1[i]) < 0) {
    newArr.push(array1[i])};
  }
  }

  check(arr1,arr2);
  check(arr2,arr1);
  console.log(newArr);
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// OR USING FILTER METHOD AND FUNCTION

// Puts array together then filters by the number(s) that aren't present.
function diff(arr1, arr2) {
  var newArr = arr1.concat(arr2);  // Concat arrays
  console.log(newArr);
  
  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) { // If array 1/2 has item, return it.
      console.log(item);
      return item;
    }
  }
  console.log(newArr.filter(check))
  return newArr.filter(check); // filters out all values but one that isn't present in both arrays
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);