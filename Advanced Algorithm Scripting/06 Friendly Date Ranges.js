function friendly(str) {

  //months array to get month from value
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //get dates as usable array
  var date1 = str[0].split("-");
  var date2 = str[1].split("-");

  //create variables to store info and then output
  var str1;
  var str2;
  var output = [];

  //get current year
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  //function to return month based on value
  function returnMonth(value) {
    if (parseInt(value.charAt(0)) === 0) {
      value = parseInt(value.substr(1, 2));
      return months[value-1];
    }
    return months[value-1];
  }

  //function to return date based on value
  function returnDate(value) {
    if (parseInt(value.charAt(0)) === 0) {
      value = value.substr(1, 2);
    }

    value = parseInt(value); // convert value to number

    if (value === 1 || value === 21 || value === 31) {
      return value + "st";
    } else if (value === 2 || value === 22) {
      return value + "nd";
    } else if (value === 3 || value === 23) {
      return value + "rd";
    } else {
      return value + "th";
    }
  }

  // if dates are the same - return one of them
  if (str[0] === str[1]) {
    str1 = returnMonth(date1[1]) + " " + returnDate(date1[2]) + ", " + date1[0];
    output.push(str1);
  }

  //if year is same
  else if (date1[0] === date2[0]) {

    //if month is same
    if (date1[1] === date2[1]) {
      str1 = returnMonth(date1[1]) + " " + returnDate(date1[2]);
      str2 = returnDate(date2[2]);
      output.push(str1, str2);
    } //end of month same

    //if month is different
    else if (date1[1] !== date2[1]) {
      str1 = returnMonth(date1[1]) + " " + returnDate(date1[2]);
      str2 = returnMonth(date2[1]) + " " + returnDate(date2[2]);
      output.push(str1, str2);

    } //end of month different

  } // end of year same

  //if year different

  //if year can be understood - i.e. next year and month is before current month OR month is same + date before
  else if (parseInt(date1[0]) === year && parseInt(date2[0]) === year + 1 && (date1[1] > date2[1] || (date1[1] === date2[1] && date1[2] > date2[2]))) {
    str1 = returnMonth(date1[1]) + " " + returnDate(date1[2]);
    str2 = returnMonth(date2[1]) + " " + returnDate(date2[2]);
    output.push(str1, str2);

  } //end of year understood

  //if year is different and cannot be understood
  else if (date1[0] !== date2[0]) {
    str1 = returnMonth(date1[1]) + " " + returnDate(date1[2]) + ", " + date1[0];
    str2 = returnMonth(date2[1]) + " " + returnDate(date2[2]) + ", " + date2[0];
    output.push(str1, str2);
  } // end of year cannot be understood
  return output;

}

friendly(["2015-06-03", "2016-01-01"]);