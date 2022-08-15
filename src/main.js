const fs = require('fs/promises');


createFile();
readFile();
printFiles();

function createFile() {
  fs.writeFile('./archivo1b.txt', 'línea 1\nLínea 2\n creado con promesas.')
    .then(() => {
      console.log('El archivo de texto fue creado empleando promesas');
    })
    .catch((error) => {
      console.log(error);
    });
}

function readFile() {
  fs.readFile('./archivo1b.txt')
    .then((datos) => {
      console.log('leyendo...', datos.toString());
    })
    .catch((error) => {
      console.log(error);
    });
}

function printFiles() {
  fs.readdir('./')
    .then((archivos) => {
      for (const archivo of archivos) {
        console.log(archivo);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
