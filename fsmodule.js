const fs = require('fs');
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(err,data);
})
console.log("readFile");//It will print first because it is asynchronous

const a = fs.readFileSync('file.txt');
console.log(a.toString());
console.log("readFileSync");//It will print second because it is synchronous

// Writing file

fs.writeFile('file2.txt','Hello World',()=>{
    console.log("File written");
});
console.log("writeFile");//It will print first because it is asynchronous

const a1 = fs.writeFileSync('file2.txt','Hello World new file');
console.log("writeFileSync");//It will print second because it is synchronous