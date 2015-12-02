//first attempt with two loops - gets a bit sloppy!

function inventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  
    function compare(a, b) {
  if (a[1] < b[1]) {
    return -1;
  }
  if (a[1] > b[1]) {
    return 1;
  }
  return 0;
}
   
  if (arr1.length === 0) {
    return arr2.sort(compare);
  }
  
  if (arr2.length === 0) {
    return arr1.sort(compare)
  }
  
  for (i=0; i < arr2.length; i++) {

    for (j=0; j<arr1.length; j++) {
    if (arr1[j].indexOf(arr2[i][1]) > -1) {
    console.log(arr1[j]);
    arr1[j][0] += arr2[i][0];
    arr2[i] = 0;
  }
  }//end of first loop
  }// end of second loop
 
  for (i=0; i<arr2.length; i++){
    if (arr2[i] !== 0) {
      arr1.push(arr2[i]);
    }
  }
  
  return arr1.sort(compare);
}


inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])

//SECOND ATTEMPT USING MAP - MUCH CLEARER - no need to use if function to find if one array is empty

function inventory(arr1, arr2) {

  //index variable
  var index;

  //name variables
  var arr1Names = [];
  var arr2Names = [];

  //compare function that sorts array by second value in each array item
  function compare(a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  }

  //loop through arr2 and check whether value is in arr1, if it is, update stock, mark its value 0.
  arr2.map(function(item) {
    return arr1.map(function(item2) {
      if (item2.indexOf(item[1]) > -1)
        item2[0] += item[0];
    }); //end of first map
  }); // end of second map

  arr2.map(function(item) {
    arr2Names.push(item[1]);
  });

  arr1.map(function(item) {
    arr1Names.push(item[1]);
  });

  arr2Names.map(function(item) {
    if (arr1Names.indexOf(item) < 0) {
      index = arr2Names.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  //return sorted first array
  return arr1.sort(compare);
}

inventory([
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
], [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
]);