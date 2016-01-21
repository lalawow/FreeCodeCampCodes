 function where(arr, num) {
  // Find my place in this sorted array.
  var newArr = arr.concat();
  newArr.push(num);
  newArr.sort(function(a,b){
  	return a>b;
  });
  console.log(newArr)
  return newArr.indexOf(num);
}

console.log(where([40, 60], 50))
console.log(where([3, 10, 5], 3)) 
console.log(where([5, 3, 20, 3], 5))