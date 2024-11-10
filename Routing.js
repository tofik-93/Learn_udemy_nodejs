
// const fs = require('fs')
// const http = require('http')
// const url = require('url')


// const server = http.createServer((req, res)=>{
//     console.log(req.url)
//     const  pathName = req.url;

//     if(pathName === '/overview' || pathName === '/'){
//         res.end("This is OVERVIEW");
        
//     }
//     else if(pathName === "/product"){
//         res.end("This.is the PRODUCT")
//     }
//     else if(pathName === "/appi"){
//         re.readFile(`${__dirname}`)
//         res.end("This.is the PRODUCT")
//     }
//     else {
//         res.writeHead(404, {
//             'Content-type':'text/html',
//             'my-own-header':'hello-world'
//         })
//         res.end('Page found')
//     }
   

// });

// server.listen(8000, '127.0.0.1', ()=>{
//     console.log('Listening to requests on port 8000')
// })

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Example route to handle form submission
app.use('/submit', (req, res) => {
    const formData = req.body; // Access the parsed data
    console.log(formData); // Log the form data
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
