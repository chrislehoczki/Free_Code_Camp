// if string starts with vowel
//1. Add "way"
//if string starts with consonant
//1. Take first letter
//2. Move to end of string
//3. Add "ay"




function translate(str) {
   var vowels = ['a','e','i','o','u']; 
   var first;
   var strArray = str.split("");
 if (vowels.indexOf(str.charAt(0)) >= 0) {
   return str + "way";
   }
else if (vowels.indexOf(str.charAt(0)) < 0 && vowels.indexOf(str.charAt(1)) && vowels.indexOf(str.charAt(2)) < 0) {
    first = strArray.splice(0,3);
    return strArray.join("") + first.join("") + "ay";
   }
     else if (vowels.indexOf(str.charAt(0)) < 0 && vowels.indexOf(str.charAt(1)) < 0) {
    first = strArray.splice(0,2);
    return strArray.join("") + first.join("") + "ay";
   }
    else if (vowels.indexOf(str.charAt(0)) < 0) {
    first = strArray.splice(0,1);
    return strArray.join("") + first.join("") + "ay";
  }
}
translate("glove");


//WITH FOR LOOP TO COUNT NUMBER OF CONSONANTS

function translate(str) {
   var vowels = ['a','e','i','o','u']; 
   var three = str.substr(0,3);
   var consonantNumber = 0;
   var strArray = str.split("");
   var first;
 for (i=0;i<three.length;i++) {
   if (vowels.indexOf(three[i]) >= 0) {
     break;
   }
   else  {
     consonantNumber += 1 ;
 }}
 if (consonantNumber === 0) {
   return str + "way";
   }
   else {
    first = strArray.splice(0,consonantNumber);
    return strArray.join("") + first.join("") + "ay";
  } 
}
translate("apaper");

// BEST VERSION WITH LESS VARIBLES AND NO SLICING


function translate(str) {
   var vowels = ['a','e','i','o','u']; 
   var consonantNumber = 0;
   var three = str.substr(0,3);
 for (i=0;i<three.length;i++) {
   if (vowels.indexOf(three[i]) >= 0) {
     break;
   }
   else  {
     consonantNumber += 1 ;
 }}
 if (consonantNumber === 0) {
   return str + "way";
   }
   else {
   return str.replace(str.substr(0,consonantNumber), "") + str.substr(0,consonantNumber) + "ay";  
  }
}  
translate("california");