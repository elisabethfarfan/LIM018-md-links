const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const fetch  = require('node-fetch');


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
  let arrlink = [];
  if (isDocFile(route)) {
    if (isMD(route)) {
      arrlink.push(route);
    }
  }else{
    const directorio =  fs.readdirSync(route);
    directorio.forEach(file => {
      const rutaAll = getFiles(path.join(route, file));
      // console.log(rutaAll);
      arrlink = arrlink.concat(rutaAll);// concat une 2 arrays
    //   console.log(arrlink);   
      // console.log(path.join(route, file));  
    })

  }
  return arrlink;
}

const getLinks = (inputPath) =>{
    const arrDocsMd = getFiles(inputPath);
    const expReg = /http?([^\)]*)/gm;
    const arrayofLinks = [];
    // console.log(arrDocsMd);
    // console.log('leyendo');
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
// console.log(getLinks('pruebas'));
// ruta absoluta 'D:/LABORATORIA/LIM018-md-links/README.md'

const validateLinks = (inputPath) =>{
  const arrLinks = getLinks(inputPath); 
 const arrayPromises = arrLinks.map(element => fetch(element.href) 
  .then(res => {
  //  console.log(res);
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
};