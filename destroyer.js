function destroyer(arr) {
  // Remove all the values
  var n = arguments.length;
  if (n==1) return arr;
  var res = arguments[0].concat();
  for (var i=1; i<n; i++) {
  	var newres=[]
  	var filter = arguments[i]
  	res.map(function(val) {
  		if (val != filter) newres.push(val);
  	})
  	res=newres.concat();
  }
  return res
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));