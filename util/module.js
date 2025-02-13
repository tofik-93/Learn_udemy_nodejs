const myModule = (()=>{
    const privateFoo = ()=>{}
    const privateBar = []

    const exported = {
        publicFoo: ()=>{},
        publicBar: ()=>{}
    }
    return exported 
})// once the parenthsis here parsed the function will be invoked

console.log(myModule)
console.log(myModule.publicFoo, myModule.privateBar)
