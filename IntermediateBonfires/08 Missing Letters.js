  

function fearNotLetter(str) {
  // create array to hold char codes
  var codes = [];
  //create var to hold missing number
  var missing;

  // push all codes to array
  for (i=0; i < str.length; i++) {
    codes.push(str.charCodeAt(i))
    }
  
  // go through codes array, if doesnt equal last code +1, return the character for that code
  
  for (i=1; i < codes.length; i++) {
    if (codes[i] !== codes[i-1] + 1) {
      console.log(codes[i]-1)
      missing = codes[i]-1;
      console.log(String.fromCharCode(missing));
      return String.fromCharCode(missing);
    }} 
  }


fearNotLetter("abce");


