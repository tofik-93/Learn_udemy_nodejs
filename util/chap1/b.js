exports.loaded = false
const a= require('./a')
module.exports={
    a, loaded:true
}

const a = require('./a')
const b = require('./b')
console.log('a ->',JSON.stringify(a, null, 2))
console.log('b ->',JSON.stringify(b, null, 2))
