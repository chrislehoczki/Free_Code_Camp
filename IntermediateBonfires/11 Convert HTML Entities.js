

function convert(str) {
  // &colon;&rpar;
  var replace = function(target, entity) {
    console.log(str.replace(target, entity));
    str = str.replace(target, entity);  
  };
 
  replace(/&/g, '&amp;');
  replace(/</g, '&lt;');
  replace(/>/g, '&gt;');
  replace(/"/g, '&quot;');
  replace(/'/g, '&apos;');
  console.log(str);
  return str;
  
}

convert("Shindler's List");
