function rot13(str) { // LBH QVQ VG!
  var res = ""
  for (var i=0; i<str.length; i++) {
  	var codeChar=str.charCodeAt(i)

  	if (codeChar>=65&&codeChar<=77) {
  		res+=String.fromCharCode(codeChar+13)
  	} else if (codeChar>=78 && codeChar<=90) {
  		res+=String.fromCharCode(codeChar-13)
  	} else res+=String.fromCharCode(codeChar)
  }
  console.log(res)
  return res;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("ABNO")