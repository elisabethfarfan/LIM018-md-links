const process = require('process');
  
// Printing process.argv property value
var args = process.argv;
  
console.log("number of arguments is "+args.length);
  
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});