
const fs = require('fs');
const data = "I am new data";
fs.writeFile("./data.txt",data,(err)=>{
    if(err) throw err;
    console.log("File Create successfully!");
})