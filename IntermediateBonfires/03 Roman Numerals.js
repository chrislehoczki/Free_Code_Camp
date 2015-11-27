
function convert(num) {

  //split string into numbers array
  
  var splitString = num.toString().split("");
  console.log("SplitString:" + splitString);
  
  //splice units out + declare unit output array
  var units = splitString.splice(splitString.length-1,splitString.length);
  console.log("Units: " + units);
   var unitoutput = [];
  
   //splice tens out + declare tens output array
   var tens = splitString.splice(splitString.length-1,splitString.length);
  console.log("Tens: " + tens);
  var tensoutput = [];
 
 //splice hundreds out + declare hundreds output array  
    var hundreds = splitString.splice(splitString.length-1,splitString.length);
  console.log("Hundreds: " + hundreds);
  var hundredsoutput = [];
  
   //splice thousands out + thousands hundreds output array 
    var thousands = splitString.splice(splitString.length-1,splitString.length);
  console.log("Thousands: " + thousands);
  var thousandsoutput = [];
  // function to convert number to decimal based on different symbols of units
function convertit(placevalue, output, symbol, middlesymbol, uppersymbol) { 
  if (placevalue == "0") {
    output = "";
    console.log("Converted: " + output);
    return output;
  }
  else if (placevalue >0 && placevalue<4) {
    for (i=0; i < placevalue; i++) {
      output.push(symbol);
    }
    output= output.join("");
    console.log("Converted: " + output);
    return output;
  }
  else if (placevalue == "4") {
    output = symbol + middlesymbol;
    console.log("Converted: " + output);
    return output;
  }
  else if (placevalue == "5") {
    output = middlesymbol;
    console.log("Converted: " + output);
    return output;
  }
  else if (placevalue>5 && placevalue<9) {
     for (i=5; i < placevalue; i++) {
      output.push(symbol);
    }
    output = middlesymbol + output.join("");
    console.log("Converted: " + output);
    return output;
  }
    else if (placevalue == "9") {
    output = symbol + uppersymbol;
      console.log("Converted: " + output);
      return output;
  }
 }
  // add functions as variables for each place value
  var unitscomplete = convertit(units, unitoutput, "I", "V", "X");
  var tenscomplete = convertit(tens, tensoutput, "X", "L", "C");
  var hundredscomplete = convertit(hundreds, hundredsoutput, "C", "D", "M");
  var thousandscomplete = convertit(thousands, thousandsoutput, "M", "D", "M");
  
   // call variables based on how long the number is
  if (num.toString().length === 1) {
    console.log(unitscomplete);
    return unitscomplete;
  }
  else if (num.toString().length === 2) {
    console.log(tenscomplete + unitscomplete);
    return tenscomplete + unitscomplete;
  }
  else if (num.toString().length === 3) {
    console.log(hundredscomplete + tenscomplete + unitscomplete);
    return hundredscomplete + tenscomplete + unitscomplete;
  }
  else if (num.toString().length === 4) {
    console.log(thousandscomplete + hundredscomplete + tenscomplete + unitscomplete);
    return thousandscomplete + hundredscomplete + tenscomplete + unitscomplete;
  }
  
}

convert(3312);


// THIS IS THE BEST SOLUTION - MUCH BETTER

function convert(num) {  
    var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (num >= decimals[i]) {
            r += roman[i];
            num -= decimals[i];
        }
    }
    return r;
}
convert(36);  