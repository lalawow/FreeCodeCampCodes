function every(collection, pre) {
  // Is everyone being true?
  for (var i=0; i<collection.length; i++)  {
  	console.log(collection[i],collection[i].hasOwnProperty(pre))
  	if (!(collection[i].hasOwnProperty(pre)))  return false
  }
    
  return true;
}

//every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))
