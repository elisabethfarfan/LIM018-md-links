const process = require('process');
const optionsCLI = require('./optionsCLI.js');

const path = process.argv[2];
const options = process.argv;
if(options.length === 3){
    optionsCLI.mdLinksDefault(path);
}

if(options.length === 4){
    if(options[3]==='--validate'){
        optionsCLI.mdLinksValidate(path);
    }
    if(options[3]==='--stats'){
        optionsCLI.mdLinksstats(path);
    }
}
if(options.length === 5){
    if(options[3]==='--stats' && options[4]==='--validate' || options[3]==='--validate' && options[4]==='--stats'){
        optionsCLI.validateStats(path);
    }
    // console.log(options[4]);

}
