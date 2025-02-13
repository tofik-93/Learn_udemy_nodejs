const myModule = (() => {
    // Private variables and functions
    const privateFoo = () => {
        console.log("Private Foo");
    };

    const privateBar = [];

    // Public API (exported object)
    const exported = {
        publicFoo: () => {
            console.log("Public Foo");
        },
        publicBar: () => {
            console.log("Public Bar");
        }
    };

    // Return the exported object
    return exported;
})(); // The function is invoked immediately

// Testing the module
console.log(myModule); // Logs the exported object
console.log(myModule.privateFoo, myModule.privateBar); // Logs undefined for private members
myModule.publicFoo(); // Calls the public method
myModule.publicBar(); // Calls the public method