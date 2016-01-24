function binaryAgent(str) {
  var arr = str.split(" ")
  var res = ''
  arr.map(function(val){
  	console.log(val,parseInt(val,2))
    res+=String.fromCharCode(parseInt(val,2))
  })
  return res;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
