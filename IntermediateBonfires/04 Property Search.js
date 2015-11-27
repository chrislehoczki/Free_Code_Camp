//MYFIRSTSOLUTION - Looks ok when you take out all the console.log statements

function where(collection, source) {
  var arr = [];
  
  console.log(collection);
  console.log(source);
  
  var property = Object.keys(source);
  
  console.log("PropKeys= " + property);

  console.log("First property= " + property[0]);
    console.log("Second property= " + property[1]);
  
  console.log("SecondPropertyValue: " + collection[0][property[1]])
  
  if (collection[0][property[1]] === source[property[1]]) {
    console.log("It works")
  }

  if (property.length === 1) {
  for (i=0; i < collection.length; i++) {
    if (source[property[0]] === collection[i][property[0]]) {
      console.log("First Name: " + collection[i].first);
   console.log("Value: " + collection[i][property]); console.log("Has property? " + collection[i].hasOwnProperty(property));   
      arr.push(collection[i]);
    }
  }
    }
  
    if (property.length === 2) {
  for (i=0; i < collection.length; i++) {
    if (source[property[0]] === collection[i][property[0]] && source[property[1]] === collection[i][property[1]]) {
      console.log("First Name: " + collection[i].first);
   console.log("Value: " + collection[i][property]); console.log("Has property? " + collection[i].hasOwnProperty(property));   
      arr.push(collection[i]);
    }
  }
    }
  
  
  console.log(arr);
  return arr;
}




where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })