function chunk(arr, size) {
  var array = []
  
  for (i = 0; i < arr.length; i) {
    var sliceTest = arr.slice(i, i += size);
    console.log(sliceTest)
    
    array.push(sliceTest);
  }

  return array
}

chunk(["a", "b", "c", "d"], 2, "");
