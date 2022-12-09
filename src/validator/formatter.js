let letsTrim = function(a){
    b = a.trim()
   console.log(`this string is trimmed ${b}`)
}
let upper = function(z){
   x = z.toUpperCase()
  console.log(`this string is converted to uppercase ${x}`)
}
let lower = function(q){
   w = q.toLowerCase()
  console.log(`this string is converted to Lowercase ${w}`)
}


module.exports.letsTrim= letsTrim
module.exports.upper=upper
module.exports.lower=lower