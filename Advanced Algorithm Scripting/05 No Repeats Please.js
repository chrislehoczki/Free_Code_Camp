function permAlone(str) {

  // Split the string into an array of characters.
  var array = str.split('');
  var perms = [];
  var temp; // to use for swapping values in arrray
  var re = /(.)\1+/g; // to use for filter function.


  // FUnction to swap variables at certain array index.
  function swap(index1, index2) {
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  //Use heap's algorithm to generate array of permutations
  function generate(int) {
    if (int === 1) {
      //when integer is one, push joined array to perms
      perms.push(array.join(''));
    } else {

      for (var i = 0; i < int; i++) {
        generate(int - 1);
        if (int % 2 === 1) { // if even
          swap(0, int - 1);
        } else {
          swap(i, int - 1); // if odd
        }
      }
    }
  }

  generate(array.length); //run function

  var filter = perms.filter(function(string) {
    return !string.match(re);
  });
  
  console.log(filter.length);
  return filter.length;
}

permAlone('aba');