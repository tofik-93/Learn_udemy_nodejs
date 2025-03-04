// exports .loaded = false;
// const b = require('./b')
// exports.loaded = true
// file logger.js
exports.info = (message)=> { // exporting the module
    console.log(`info:${message}`)
}
exports.verbose = (message) => {
    console.log(`verbose:${message}`)
}

// utils.js
function greet(name) {
    return `Hello, ${name}!`;
}

function farewell(name) {
    return `Goodbye, ${name}!`;
}

// Exporting multiple functions as an object
module.exports = { greet, farewell };
