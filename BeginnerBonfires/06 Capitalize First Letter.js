function titleCase2(str) {
  
   var lowerCase = str.toLowerCase();
  console.log(lowerCase);
  
      var splitString = lowerCase.split(" ");
  console.log(splitString);
  
  var array = [];
   
  for (var i = 0; i < splitString.length; i++) {
     
    var lowercaseLetter = splitString[i].charAt(0);
    
    var uppercaseLetter = splitString[i].charAt(0).toUpperCase();
    
    var finished = splitString[i].replace(lowercaseLetter, uppercaseLetter);
                                          
console.log(finished);
   
    array.push(finished);
    }
  
console.log(array);

 var joinArray = array.join(" ");
  
  console.log(joinArray);
  
  return joinArray;
 
}


  
titleCase2("I'm a little tea pot", "");