// Express can o the work of custom backend module that we dont have write that big code by  our small brains the express library makes oour work easy and fast it do out work of routing get and post for our web page and it is scalable 



// 1st Step Import Express module
const express = require('express');

// 2nd make the app or any name that you want to create and initialize it eith the express 
const app = express();

// 3rd step set the port to call on the localhost 
const port = 80;

// 4th using get method to handle my request by the slash(/) or any about end point  
// And we can also add the status code in this by adding some word 
app.get('/',(req,res)=>{
    res.status(200).send('Hello World');
    // res.send('Hello World');

})

app.get('/about',(req,res)=>{
    res.send('About Hello World ');
})

app.get('/this',(req,res)=>{
    res.status(404).send('This Page is not Found');
})

// This is for the post 
app.post('/about',(req,res)=>{
    res.send('About Hello World ');
})

// 5th app.listen then apply port like whenever rq comes it reponse  
app.listen(port, ()=>{
    console.log(`The application staarted successfully on port ${port}`);
})
