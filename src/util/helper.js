const date = new Date();
let printDate = function(){
        console.log(`The date is`, date)
}
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const mo = new Date();
let printMonth = function(){
        console.log(`The month is`, month[mo.getMonth()-1])
}
const batchName = "Californium"
const week = 'W3D3'
const topic = "the topic for today is Nodejs module system" 
let printBatchinfo = function(){
    console.log(batchName,week,topic)
}

module.exports.getBatchinfo = printBatchinfo
module.exports.date = printDate
module.exports.month = printMonth