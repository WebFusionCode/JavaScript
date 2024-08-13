 // Require call of libraries 
const express = require('express');
// const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Uses of the files 
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Setting the engine 
app.set('view engine', 'pug') // Calling the engine and on the engin of the pug library 
app.set(path.join(__dirname, 'views')) // Setting the path of the folder where the templete is store 

// Here are the end points of the get and post 
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug', params)
})
app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug', params)
})




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})



