
const fs = require('fs')
const http = require('http')
const url = require('url')


const server = http.createServer((req, res)=>{
    console.log(req.url)
    const  pathName = req.url;

    if(pathName === '/overview' || pathName === '/'){
        res.end("This is OVERVIEW");
        
    }
    else if(pathName === "/product"){
        res.end("This.is the PRODUCT")
    }
    else if(pathName === "/appi"){
        re.readFile(`${__dirname}`)
        res.end("This.is the PRODUCT")
    }
    else {
        res.writeHead(404, {
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        })
        res.end('Page found')
    }
   

});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Listening to requests on port 8000')
})