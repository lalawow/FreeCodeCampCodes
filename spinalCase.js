function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var res=str.concat()
  res = res.replace(/_/g," ");
  console.log(str, res)
  res = upperCaseFormat(res);
    console.log(str, res)
  if (res[0]==" ") res=res.substr(1).concat()
    console.log(str, res)
  res = res.replace(/\s+/g,"-")
  console.log(str, res)
  return res;
}

function upperCaseFormat(propertyName) {
  function upperToHyphenLower(match) {
    return ' ' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show")
spinalCase("thisIsSpinalTap")
spinalCase("Teletubbies say Eh-oh")