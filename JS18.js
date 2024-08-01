const fs = require("fs");
let text = fs.readFileSync("node1.txt","utf-8")
text = text.replace("browser","Harsh")
console.log("The content of this is")
console.log(text);

console.log("creating a new file")
fs.writeFileSync("node1.txt", text);

