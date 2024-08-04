const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('./index.html')
const About = fs.readFileSync('./About.html')
const Contact = fs.readFileSync('./Contact.html')
const Services = fs.readFileSync('./Services.html')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(index);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });