function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  var res= arr.filter(function(val){
    switch(val) {
      case false:
      case null:
      case 0:
      case "":
      case undefined:
      case NaN:
        return false;
        break;
      default:
        return true;
    }
  });

  if ((typeof res[0]=="number")&&(isNaN(res[0]))) {return [];}

  return res;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a","B","C"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));