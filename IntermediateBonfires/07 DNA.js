function pair(str) {
  var first = ["A","T","C","G"];
  var second = ["T", "A", "G", "C"]
  var index;
  var splitString = str.split("");
  var array = []
// create 2d array
for (i=0;i < str.length; i++) {
     array.push([str[i]])
  }
  console.log(array)
  
// push matched dna value to appropriate array  
  for (i=0; i < splitString.length; i++) {
    index = first.indexOf(splitString[i]);
    console.log(second[index]);
    array[i].push(second[index]);
  }
  console.log("Array: " + array);
  return array;
}

pair("GCG");
