function truncate(str, num) {

  var dots = "...";

   if (str.length > num) {
   return str.slice(0, num-3) + "..."
}
  return str;
  console.log(str);
}


truncate("A-tisket a-tasket A green and yellow basket", 11, "");
