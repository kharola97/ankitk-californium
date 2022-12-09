const { chunk } = require("lodash")

const months = ['jan','feb','mar','april','may','june','july','aug','sept','oct','nov','dec']
const splitMonth = function(){
    result= chunk(months,3)
    console.log(result)
}
const nums = [1,3,5,7,9,11,13,15,17,19,]
var _ = require('lodash');
const first= function(){
    x = _.tail(nums)
    console.log(x)
}

const num1 = [1,1,2,7,2,3,4]
const num2 = [1,1,2,6,2,3,4]
const num3 = [1,3,2,1,5,3,4]
const num4 = [1,1,2,4,2,3,4]
const num5 = [1,2,2,1,2,3,4]

const uni = function(){
    s = _.union(num1,num2,num3,num4,num5)
    console.log(s)
}

const movies = [ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth'] ]
const Pairs = function(){
    b = _.fromPairs(movies)
    console.log(b)
}


module.exports.splitMonth=splitMonth
module.exports.first=first
module.exports.uni=uni
module.exports.Pairs=Pairs