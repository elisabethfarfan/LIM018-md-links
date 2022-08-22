const route = require('./main.js');
const process = require('process');


const mdLinks = (inputPath,  options = { validate: false }) => new Promise((resolve) => {
    if (route.existsRoute(inputPath)) {
        if(options.validate){
            resolve(route.validateLinks(inputPath));
        }else{
            resolve(route.getLinks(inputPath));
        }     
    }
  });


//   const arr = mdLinks('prueba.md', { validate: false })
//   .then(e => console.log(e));// desempaquetar promesas
//   console.log(arr);

  const arr = mdLinks('prueba.md', { validate: true })
  .then(e => console.log(e));// desempaquetar promesas
  console.log(arr);

//   const arr1 = mdLinks('README.md')
//   .then(e => console.log(e));// desempaquetar promesas
//   console.log(arr1);

// var args = process.argv;
  
// console.log("number of arguments is "+args.length);
  
// args.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });