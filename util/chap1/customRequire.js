// function loadModule (filename, module, require){
//     const wrappedSrc =`(function (module, exports , require){
//     ${fs.readFileSync(filename, 'utf8')})(module, module.exports,require)`
// }eval(wrappedSrc)

const fs = require('fs')
const path = require('path')
const vm = require('vm')

const customRequire = (modulePath) => {
    //step 1 : resolve th path to the module path
    const resolvedPath= resolveModulePath(modulePath);
    //step 2 : check if the module is already cached
    if(customRequire.cache[resolvedPath]){
        return customRequire.cache[resolvedPath].exports
    }

//step3: load the module content
const moduleContent = fs.readFileSync(resolvedPath, 'utf8') 

//step 4 wrap the module content in a function 
const wrapper = [
    '(function(exports,require, module, __filename, __dirname){',
    moduleContent,'\n})'
].join('');

//step5 compile the wrapped code
const compiledwrapper = vm.runInThisContext(wrapper,{
    filename:resolvedPath
})
//Step 6:Create a module object
const module = {exports:{}}

// step 7: excute the compiled wrapper fucntion
compiledwrapper.call(
    module.exports,
    module.exports,
    customRequire,
    module,
    resolvedPath,
    path.dirname(resolvedPath)
)
//step 8 : cache the module
customRequire.cache[resolvedPath] = module  
//step9 return the module exports object
return module.exports


}
customRequire.cache = {}

function resolveModulePath (modulePath){
//Try to resolve the path with .js extension if not already present 
if(!modulePath.endsWith('.js')){
    modulePath += '.js';
}
//Resolve the absolute path
const absoutePath = path.resolve(modulePath)
//Checkk if the file exists
if(fs.existsSync(absoutePath)){
    return absoutePath
}
throw new Error(`Cannot find module ${modulePath}`)
//Example usage
}
const myModule = customRequire('./myModule')
console.log(myModule)
// const fs = require('fs');
// const path = require('path');
// const vm = require('vm');

// function loadModule(filename, module, require) {
//     // Read the module's source code
//     const code = fs.readFileSync(filename, 'utf8');

//     // Wrap the module's code in a function
//     const wrapper = `
//         (function (module, exports, require) {
//             ${code}
//         })
//     `;

//     // Compile the wrapped code
//     const script = new vm.Script(wrapper, {
//         filename: filename, // Set the filename for better error messages
//         displayErrors: true,
//     });

//     // Create a context for the module
//     const context = vm.createContext({
//         module: module,
//         exports: module.exports,
//         require: require,
//         __filename: filename,
//         __dirname: path.dirname(filename),
//     });

//     // Run the compiled script in the context
//     script.runInContext(context);
// }

// // Example usage
// const myModule = {
//     exports: {},
// };
// loadModule('./myModule.js', myModule, require);
// console.log(myModule.exports.sayHello()); // Assuming myModule.js exports a `sayHello` function

// function require (moduleName){
    
// }
function require (moduleName){
    console.log(`Require invoked for the module:${moduleName}`)
    const id = require.resolve(moduleName)
    if(require.cache[id]){
        return require.cache[id].exports
    }
    //Module metadata
    const module = {
        exports:{},
        id
    }
    //Update the cache
    require.cache[id]= module

    //loadModule(id, module,require)
    loadModule(id,module,require)
    return module.exports   
}
require.cache = {}

require.resolve = (moduleName) =>{  
}

