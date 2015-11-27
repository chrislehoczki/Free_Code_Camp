function sumAll(arr) {
  var min = Math.min.apply(Math, arr);
  var max = Math.max.apply(Math, arr);
  var pushArray = [];
  for (i=min; i <= max; i++) {
    console.log(i);
    pushArray.push(i);
  }
console.log(pushArray);
  
var total = pushArray.reduce(function(a, b) {
  return a + b;
});
  console.log(total);
  return total;
}
  
sumAll([1, 4]);