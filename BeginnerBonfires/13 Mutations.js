 function mutation(arr) {
  var array1 = arr[0].toLowerCase().split("");
  var array2 = arr[1].toLowerCase().split("");
  
for (var i = 0; i < array2.length; i++) {

  if (array1.indexOf(array2[i]) === -1){
      console.log("false");
    return false
      } 
      

  }
    
   return true;
  console.log("true") 
 
}
  mutation(["hello", "hey"], "");