function bouncer(arr) {

  
  function turnBooley(value) {
    return Boolean(value); 
      }
  
 var arrayFiltered = arr.filter(turnBooley);
  console.log(arrayFiltered);
  return arrayFiltered;
}

bouncer([7, "ate", "", false, 9], "");