const route = require('./main.js');

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

module.exports = {
    mdLinks
  };