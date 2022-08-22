const route = require('./main.js');

const mdLinks = (inputPath) => new Promise((resolve) => {
    if (route.existsRoute(inputPath)) {
        resolve(route.validateLinks(inputPath));
     
    }
  });


  const arr = mdLinks('prueba.md')
  .then(e => console.log(e));// desempaquetar promesas
  console.log(arr);

  const arr1 = mdLinks('README.md')
  .then(e => console.log(e));// desempaquetar promesas
  console.log(arr1);