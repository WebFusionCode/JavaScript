// Express can o the work of custom backend module that we dont have write that big code by  our small brains the express library makes oour work easy and fast it do out work of routing get and post for our web page and it is scalable 




const express = require('express'); // 1st Step Import Express module
const path = require('path'); // Giving a string path of view directory
const app = express();  // 2nd make the app or any name that you want to create and initialize it eith the express 
const port = 80; // 3rd step set the port to call on the localhost 

// EXPRESS SPECIFIC STUFF HERE 
app.use('/static',express.static('static')); // for serving static file 

// PUG SPECIFIC STUFF HERE 
app.set('view engine', 'pug') // set the Templet engine as pug
app.get(path.join(__dirname,'views'));// set the view directory 

// END POINTS 
app.get('/',(req,res)=>{
    const con = 'All over the best game is bgmi'
    const param = {'title': 'the best game', 'content': con}
    res.status(200).render("index.pug", param)
})


// START THE SERVER 
app.listen(port, ()=>{
   
    console.log(`The application staarted successfully on port ${port}`);
})

// 4th using get method to handle my request by the slash(/) or any about end point  
// And we can also add the status code in this by adding some word

// app.get('/demo',(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey Harsh', message: 'Hello there! is an update on the Node js' });
//     // res.send('Hello World');

// })

// app.get('/about',(req,res)=>{
//     res.send('About Hello World ');
// })

// app.get('/this',(req,res)=>{
//     res.status(404).send('This Page is not Found');
// })

// // This is for the post 
// app.post('/about',(req,res)=>{
//     res.send('About Hello World ');
// })

// 5th app.listen then apply port like whenever rq comes it reponse  
