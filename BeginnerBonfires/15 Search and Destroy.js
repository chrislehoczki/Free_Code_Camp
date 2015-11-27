function destroyer(arr) {
  // Remove all the values
  var arrArray = Array.prototype.slice.call(arguments);

  function filter1(value) {
    return value != arrArray[1] && value != arrArray[2] && value != arrArray[3]
  };

  array0 = arrArray[0];

  console.log(array0.filter(filter1));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "");