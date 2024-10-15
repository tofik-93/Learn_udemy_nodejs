const http = require('http')

const express = require('express')


const app = express()
app.use((req,res,next)=>{
    console.log('In the middleware!')
})
// const ht= require('./ht.js')

const server = http.createServer(app)
server.listen(8000)