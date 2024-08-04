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
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/index'){
        res.end(index);
    }
    else if(url == '/About'){
        res.end(About);
    }
    else if(url == '/Contact'){
        res.end(Contact);
    }
    else if(url == '/Services'){
        res.end(Services);
    }
    else{
        res.statusCode= 404;
        res.end("<h1>404 NOT FOUND</h1>")
    }
    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });