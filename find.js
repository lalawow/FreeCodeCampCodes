function find(arr, func) {
  arr.map(function(val) {
  	console.log(val, func(val))
    if (func(val)==true) return val
  })
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });