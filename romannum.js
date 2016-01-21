function convert(num) {
	var a=[["","I","II","III","IV","V","VI","VII","VIII","IX"],
["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],["","M","MM","MMM"]]
var res=""
var digit = 0
digit = num % 10
num = Math.floor(num/10)
res = a[0][digit]
if (num===0) return res
digit = num % 10
num = Math.floor(num/10)
res = a[1][digit]+res
if (num===0) return res
digit = num % 10
num = Math.floor(num/10)
res = a[2][digit]+res
if (num===0) return res
digit = num % 10
num = Math.floor(num/10)
res = a[3][digit]+res
return res
}


console.log(convert(36));

