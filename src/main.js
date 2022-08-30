const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const fetch  = require('node-fetch');


// leemos y verifica la existencia de una ruta 
const existsRoute = (inputPath) => fs.existsSync(inputPath); 

// verificar si la ruta es absoluta y sino la convertimos 
const getAbsoluteRoute = (inputPath) => path.isAbsolute(inputPath) ? inputPath : path.resolve(inputPath);

// Verificar si es un archivo
const isDocFile = (inputPath) => {
  const stats = fs.statSync(inputPath);
  return stats.isFile();
};

// es un archivo .md 
const isMD = (inputPath) => (path.extname(inputPath) === '.md'); 

// leer el contenido del archivo 
const readFile = (inputPath) => fs.readFileSync(inputPath, 'utf8');

// Verifica si es ruta abs y  .md
const getFiles = (inputPath) =>{
  const route = getAbsoluteRoute(inputPath);
  let arrlink = [];
  if (isDocFile(route)) {
    if (isMD(route)) {
      arrlink.push(route);
    }
  }else{
    const directorio =  fs.readdirSync(route);
    directorio.forEach(file => {
      const rutaAll = getFiles(path.join(route, file));    
      arrlink = arrlink.concat(rutaAll);    
    })

  }
  return arrlink;
}

const getLinks = (inputPath) =>{
    const arrDocsMd = getFiles(inputPath);
    const expReg = /http?([^\)]*)/gm;
    const arrayofLinks = [];   
    arrDocsMd.forEach(file => {
      const readDocMD = readFile(file); 
      const renderer  = new marked.Renderer();
      renderer.link = (urlFile, _, urlText) => {
              arrayofLinks.push({
                href: urlFile,
                text: urlText,
                path: file,
              });          
       
            };
      marked(readDocMD,{ renderer  });    })
   
    return arrayofLinks.filter(e => e.href.match(expReg));  
}


const validateLinks = (inputPath) =>{
  const arrLinks = getLinks(inputPath); 
 const arrayPromises = arrLinks.map(element => fetch(element.href) 
  .then(res => {
    if (res.status < 400) {
      return {
        ...element,
        status: res.status,
        Text: res.statusText,
      };
    }
    return {
      ...element,
      status: res.status,
      Text: 'FAIL',
    };
  })
  .catch(() => ({
    ...element,
    status: 'ERROR',
    Text: 'FAIL',
  })));

return Promise.all(arrayPromises);
}



module.exports = {
  existsRoute,
  getLinks,
  validateLinks,
  getAbsoluteRoute,
  isDocFile,
  isMD,
  readFile,
  getFiles,

};