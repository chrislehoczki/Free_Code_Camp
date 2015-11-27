// BEST SOLUTION TO THE PROBLEM - refined my code and took out slices and splices
function myReplace(str, before, after) { 
    if (before.toString().charAt(0) === before.toString().charAt(0).toUpperCase())
    {
  after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
    }
  return str.replace(before, after);
}
 

 // MY FIRST VERSION....

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

function myReplace(str, before, after) {
    // split the string     
  var strSplit = str.split(" ");
  console.log(strSplit)
  //find index of word
  var index = strSplit.indexOf(before);
  //slice the word out
  var removed = strSplit.slice(index, index+1);
  //tests
  console.log(removed);
  console.log(removed.toString().charAt(0));  console.log(removed.toString().charAt(0).toUpperCase())
//if first character of removed is upper case, change character of after
    if (removed.toString().charAt(0) === removed.toString().charAt(0).toUpperCase())
    {
  after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
  console.log(after)
    }
  
  
  console.log(strSplit);
  // splice after in at the right point
  strSplit.splice(index, 1, after);
  //join the string
  str = strSplit.join(" ");
  console.log(str)
  return str;
  
}
 

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
