const route = require('./main.js');


const mdLinks = (inputPath,  options = { validate: false }) => new Promise((resolve,) => {
    if (route.existsRoute(inputPath)) {
        if(options.validate){
            resolve(route.validateLinks(inputPath));
        }else{
            resolve(route.getLinks(inputPath));
        }     
    }else{
        console.log('la ruta no existe');
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