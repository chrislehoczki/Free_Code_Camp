function telephoneCheck(str) {
  // Good luck!
  var re;
  if (str.substr(0, 1) === "1") {
    re = /^(1 |1)(\(\d{3}\)|\d{3})(-*| *)(\d{3})(-*| *)(\d{4}$)/g;
    return re.test(str);
  }

  re = /^(\(\d{3}\)|\d{3})(-*| *)(\d{3})(-*| *)(\d{4}$)/g;
  return re.test(str);
}

telephoneCheck("555-555-5555");


// REFACTORD CODE INTO ONE REGEX

function telephoneCheck(str) {
  // Good luck!
  var re;

  re = /^1?\s?(\(\d{3}\)|\d{3})(-*| *)(\d{3})(-*| *)(\d{4}$)/g;
  return re.test(str);
}

telephoneCheck("555-555-5555");