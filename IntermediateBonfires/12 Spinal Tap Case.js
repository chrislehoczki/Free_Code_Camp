// FIRST ATTEMPT - dodgy - don't really understand Regex - need to research again.

function spinalCase(str) {

  console.log(str.indexOf(" "))
  if (str.indexOf(" ") >= 0 || str.indexOf("_") >= 0 ) {
    var lowerCased = str.toLowerCase();
  var dashed = lowerCased.replace(/ /g, "-");
  dashed = dashed.replace(/_/g, "-");
  console.log(dashed);
  return dashed;
  }
  else {
  var regex = str.replace(/([A-Z])/g, '-$1');
  console.log(regex)
  console.log(regex.toLowerCase());
  return regex.toLowerCase();
  
  }
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");

/// OTHER SOLUTION _+ TRANSLATION


function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  // \s = whitespace, + = at least one, |= find any alternatives specified, underscore, global

  // PART 1
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // PART 2
  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}