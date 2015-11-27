function palindrome(str) {
   var strReplaced = str.replace(/[\W_]/g, '').toLowerCase();
    console.log(strReplaced);
  
  var strReversed = strReplaced.split("").reverse().join("");
    console.log(strReversed);
  
  if (strReversed === strReplaced) {
    console.log("true");
    return true;
  }
  else { console.log("false"); 
        return false;
       };

};

palindrome("0_0 (: /-\\ :) 0-0");