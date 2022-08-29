const route = require('./main.js');
const chalk = require('chalk');



const mdLinks = (inputPath,  options = { validate: false }) => new Promise((resolve, reject) => {
    if (route.existsRoute(inputPath)) {
        if(options.validate){
            resolve(route.validateLinks(inputPath));
        }else{
            resolve(route.getLinks(inputPath));
        }     
    }else{
       reject(' La ruta no existe, vuelve a ingresar una ruta válida ');
    }
  });


//  mdLinks('pruebas', {validate: true})
//   .then(e => console.log(e));// desempaquetar promesas
//   console.log(arr);


// let path = process.argv[2];

// mdLinks(path, { validate: true })
// .then(e => console.log(e));// desempaquetar promesas
//   console.log(arr);

module.exports = {
    mdLinks
  };