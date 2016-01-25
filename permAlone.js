var factorials=[1,1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800]

function permAlone(str) {  
  var strCharObj = {}
  var length = str.length
  for (var i=0; i<length; i++) {
    if (strCharObj.hasOwnProperty(str[i])) {
    	strCharObj[str[i]]++
    } else {
    	strCharObj[str[i]]=1
    }
  }
  var count=factorials[length]
  var repeatArr = []
  for (var key in strCharObj) {
  	if (strCharObj[key]>1) repeatArr.push(strCharObj[key])
  }
  var repeatArrLength = repeatArr.length
  var sign = 1
  var repeatIndex = 1
  while (repeatIndex<=repeatArrLength) {
  	count-=(calRepeat(length,repeatIndex,repeatArr)*sign)
  	sign =0-sign
  	repeatIndex++
  }
  console.log(str+" count: "+count)
  return count
}

function calRepeat(length,index, arr) {
	var rest = index
	var base = 1
	var start = 0
	var repeatLength = 0

	var res = calRepeat2(length, rest, arr, base, start, repeatLength, index)
//	console.log("index: "+index+" res1: "+ res)
	return res
}

function calRepeat2(length, rest, arr, base, start, repeatLength,index) {
	var res = 0
	for (var i = start; i<arr.length-rest+1; i++) {
		if (rest==1) {
			res +=base*factorials[arr[i]]*factorials[length-repeatLength-arr[i]+index]
		} else {
			res +=calRepeat2(length,rest-1,arr,base*factorials[arr[i]],i+1,repeatLength+arr[i],index)
		}
	}
//    console.log("base: "+base+" start:"+start+" res: "+res)
	return res
}


permAlone('aab')
//permAlone("aaa")
permAlone('aabb')
//permAlone('abc')
permAlone("abcdefa")
permAlone("abfdefa")
//permAlone("zzzzzzzz")
