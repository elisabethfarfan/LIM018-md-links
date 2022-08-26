const process = require('process');
const optionsCLI = require('./optionsCLI.js');
const chalk = require('chalk');

const path = process.argv[2];
const options = process.argv;

const help = `
                Ingrese una de las siguientes opciones (la ruta puede ser absoluta o relativa):
                ╔══════════════════════════════════════════╦═════════════════════════════════════════════════════════════════╗
                ║    OPCIONES                              ║               DESCRIPCIÓN DE SALIDA                             ║
                ║                                          ║                                                                 ║
                ║══════════════════════════════════════════║═════════════════════════════════════════════════════════════════║
                ║  mdLinks <ruta>                          ║  Muestra los links encontrados con su texto y ruta.             ║
                ║                                          ║                                                                 ║
                ║══════════════════════════════════════════║═════════════════════════════════════════════════════════════════║
                ║  mdLinks <ruta> --validate               ║  Muestra los links encontrados con su texto,                    ║
                ║                                          ║  ruta, status y mensaje del status.                             ║
                ║══════════════════════════════════════════║═════════════════════════════════════════════════════════════════║
                ║  mdLinks <ruta> --stats                  ║  Muestra la estadística de los links                            ║
                ║                                          ║  encontrados y links únicos.                                    ║
                ║══════════════════════════════════════════║═════════════════════════════════════════════════════════════════║
                ║  mdLinks <ruta> --stats --validate       ║   Muestra la estadística de los links encontrados,              ║
                ║                                          ║   links únicos y links rotos.                                   ║
                ║══════════════════════════════════════════║═════════════════════════════════════════════════════════════════║
                ║  mdLinks <ruta> --validate --stats       ║   Muestra la estadística de los links encontrados,              ║
                ║                                          ║   links únicos y links rotos.                                   ║
                ╚══════════════════════════════════════════╩═════════════════════════════════════════════════════════════════╝
                By Elisabeth Farfán
`;
if(options.length === 2){
    console.log(chalk.blueBright(help));
}
if(options.length === 3){
    optionsCLI.mdLinksDefault(path);
}

if(options.length === 4){
    if(options[3]==='--validate'){
        optionsCLI.mdLinksValidate(path);
    }
    if(options[3]==='--stats'){
        optionsCLI.mdLinksstats(path);
    }else{
        console.log(chalk.blueBright(help));
    }
}
if(options.length === 5){
    if(options[3]==='--stats' && options[4]==='--validate' || options[3]==='--validate' && options[4]==='--stats'){
        optionsCLI.validateStats(path);
    }else{
        console.log(chalk.blueBright(help));
    }
    // console.log(options[4]);

}
