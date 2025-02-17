// function loadModule (filename, module, require){
//     const wrappedSrc =`(function (module, exports , require){
//     ${fs.readFileSync(filename, 'utf8')})(module, module.exports,require)`
// }eval(wrappedSrc)

const fs = require('fs')
const path = require('path')
const vm = require('vm')

const customRequire = (modulPath) => {
    //step 1 : resolve th path to the module path
    const resolvedPath= resolveModulePath(modulPath);
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
    customElements,
    module,
    resolvedPath,
    path.dirname(resolvedPath)
)
//step 8 : cache the module
customRequire.cache[resolvedPath] = module  
//step9 return the module exports object
return module.exports


}
customElements.cache = {}

function resolveModulePath (resolveModulePath){
//Try to resolve the path with .js extension if not already present 
if(!resolveModulePath.endWith('.js')){
    modulePath+= '.js';
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
