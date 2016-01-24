function steamroller(arr) {
  // I'm a steamroller, baby
  console.log("steamroller: "+arr.toString())
  var res = []
  for (var i=0; i<arr.length; i++) {
  	console.log("arr: "+arr[i].toString())
  	if (!Array.isArray(arr[i])) {
  		console.log("not array")
  		res = Array.prototype.concat.call(res,arr[i])
  	} else {
  		console.log("is array")
  		res = Array.prototype.concat.call(res,steamroller(arr[i]))
  	}
  	console.log("res: "+res.toString())
  }
  console.log(res)
  return res
}

//steamroller([1, [2], [3, [[4]]]]);



//steamroller([1, [2], [3, [[4]]]]);
steamroller([1, [2]]);