function binaryAgent(str) {
var array = [];
var split = str.split(" "); // split the string into separate binary values

  for (i=0; i < split.length; i++ ) {
 array.push(String.fromCharCode(parseInt(split[i], 2))); // parseInt the binary with "2" - can use other numbers for hex / 10: Then get letter, then push it onto array.
  }
  console.log(array.join(""))
  return array.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

