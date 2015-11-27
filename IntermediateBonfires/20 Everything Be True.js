function every(collection, pre) {

  // Is everyone being true?
  console.log(pre);
  console.log(collection[0][pre]);
  console.log(collection.length);  // Some checks
  
   for (i=0; i < collection.length; i++) {
    if (!collection[i][pre]) // if an objects specified value is falsey
     {
       console.log("its false");
       return false; // return false
      }
       console.log("its true"); // simple check
    }
  return true; // if all values are true, if statement doesn't return, and then function returns true.
}

every([{"name": "Pete", "onBoat": "blah"}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")
     