const fs = require("fs");
const newdata = "i a new data";
const data = fs.readFileSync('./data.txt','utf8');
fs.writeFileSync('./data.txt',newdata);
//console.log(data);
