const route = require('./main.js');

const mdLinks = (inputPath, options) => new Promise((resolve) => {
    if (route.existsRoute(inputPath)) {
        resolve(route.validateLinks(inputPath));
     
    }
  });


  const arr = mdLinks('prueba1.md')
  .then(e => console.log(e));// desempaquetar promesas
  console.log(arr);