const http = require('http');
const fs = require('fs');

const fileContent1 = fs.readFileSync('JS10.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(fileContent1);
});
server.listen(80, '127.0.0.1',()=>{
    console.log('listening the server port on 80');
});