// any code execute line by line is called syncronous (blocking)
// any code not execute line by line no gurentted and call backs will fired is called asynchronous (non-blocking) 
const fs = require("fs");
// in this we didnt use readfilesync 
let text = fs.readFile("node1.txt","utf-8", (error,data)=>{
    console.log(error,data);
})
console.log("hello how are yo?");