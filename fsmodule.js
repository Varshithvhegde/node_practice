const fs = require('fs');
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err,data);
})
console.log("readFile");//It will print first because it is asynchronous

const a = fs.readFileSync('file.txt');
console.log(a.toString());
console.log("readFileSync");//It will print second because it is synchronous