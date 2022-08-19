const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const fetch  = require('node-fetch');

// /\[([^\[]+)\](\(.*\))/gm -> regex

// leemos y verifica la existencia de una ruta D:/LABORATORIA/LIM018-md-links/README.md
const existsRoute = (inputPath) => fs.existsSync(inputPath); // true or false

// verificar si la ruta es absoluta y sino la convertimos en abs
const getAbsoluteRoute = (inputPath) => path.isAbsolute(inputPath) ? inputPath : path.resolve(inputPath);

// Verificar si es un archivo
const isDocFile = (inputPath) => {
  const stats = fs.statSync(inputPath);
  return stats.isFile();
};

// es un archivo .md --> path.extname --> retorna la extencion  del path
const isMD = (inputPath) => (path.extname(inputPath) === '.md'); // true o false si .md

// leer el contenido del archivo readFileSync --> lee archivos y devuelve su contenido
const readFile = (inputPath) => fs.readFileSync(inputPath, 'utf8');

// Verifica si es ruta abs y  .md
const getFiles = (inputPath) =>{
  const route = getAbsoluteRoute(inputPath);
  if (isDocFile(route)) {
    if (isMD(route)) {
      return route;
    }else{
      return 'no es un archivo .md';
    } 
  }else{
    return 'el path, es un directorio';
  }
}

const getLinks = (inputPath) =>{
    const arrDocsMd = getFiles(inputPath);
    const readDocMD = readFile(arrDocsMd);

    const arrayofLinks = [];
    const renderer  = new marked.Renderer();
    renderer.link = (urlFile, _, urlText) => {
            arrayofLinks.push({
              href: urlFile,
              text: urlText,
              path: arrDocsMd,
            });          
     
          };
    marked(readDocMD,{ renderer  });
    return arrayofLinks;  
}

// ruta absoluta 'D:/LABORATORIA/LIM018-md-links/README.md'

const validateLinks = (inputPath) =>{
  const arrLinks = getLinks(inputPath); 
 const arrayPromises = arrLinks.map(element => fetch(element.href) 
  .then(res => {
   
    if (res.status >= 200 && res.status < 400) {
      return {
        ...element,
        status: res.status,
        statusText: res.statusText,
      };
    }
    return {
      ...element,
      status: res.status,
      statusText: 'FAIL',
    };
  })
  .catch(() => ({
    ...element,
    status: 'ERROR',
    statusText: 'FAIL',
  })));

return Promise.all(arrayPromises);
}



module.exports = {
  existsRoute,
  validateLinks,
};