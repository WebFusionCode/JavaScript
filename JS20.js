// how to serve file on the basis of users request 

const http = require('http')
// fs is a module 
const fs = require('fs')
const fileContent = fs.readFileSync('js8.html')

const server = http.createServer((req,res)=>{
    // req and res stands for request and response 
    res.writeHead(200,{'Content-Type':'text/html'}) 
    res.end(fileContent)
})
server.listen(80,'127.0.0.1',()=>{
    console.log('Listening on port 80')
})