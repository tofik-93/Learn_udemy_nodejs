// exports .loaded = false;
// const b = require('./b')
// exports.loaded = true
// file logger.js
exports.info = (message)=> {
    console.log(`info:${message}`)
}
exports.verbose = (message) => {
    console.log(`verbose:${message}`)
}

