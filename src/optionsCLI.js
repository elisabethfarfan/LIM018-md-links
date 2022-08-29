const mdLinks = require('./index.js');
const chalk = require('chalk');
  
// Printing process.argv property value

const mdLinksDefault = (path) => {
    mdLinks.mdLinks(path, { validate: false })
    .then(e =>  console.log(e))
    .catch( error => console.log('❗❗',chalk.white.bgRed( error), '❗❗'))
}

const mdLinksValidate = (path) => {
    mdLinks.mdLinks(path, { validate: true })
    .then(e =>  console.log(e))
    .catch( error => console.log('❗❗',chalk.white.bgRed( error), '❗❗'))
}

const mdLinksstats = (path) => {
    mdLinks.mdLinks(path, { validate: true })
    .then(links =>  {
        const totalLinks = links.map(link => link.href);
        const uniqueLinks = new Set(totalLinks);
        console.log('');
        console.log(chalk.magentaBright('<─────── VALIDATE OF LINKS  ────────>'));
        console.log(' ');
        console.log('✔', chalk.hex('#05DFD7').bold('TOTAL:  ',totalLinks.length), ' 🥳 ')
        console.log('───────────────');
        console.log('✔', chalk.hex('#3EC70B').bold('Unique: ', uniqueLinks.size), ' 🤩 ');
        console.log(' ');
    })
    .catch( error => console.log('❗❗',chalk.white.bgRed( error), '❗❗'))
    
}

const validateStats = (path) => {
    mdLinks.mdLinks(path, { validate: true })
    .then(links =>  {
        const totalLinks = links.map(link => link.href);
        const uniqueLinks = new Set(totalLinks);
        const brokenLinks = links.filter(link => typeof link.status != 'number');
        console.log(' ');
        console.log(chalk.magentaBright('<─────── VALIDATE AND STATS OF LINKS  ────────>'));
        console.log(' ');
        console.log('✔', chalk.hex('#3E00FF').bold('TOTAL:  ',totalLinks.length), ' 🥳 ')
        console.log('───────────────');
        console.log('✔', chalk.hex('#3EC70B').bold('Unique: ', uniqueLinks.size), ' 🤩 ');
        console.log('───────────────');
        console.log('❌', chalk.red.bold('Broken: ', brokenLinks.length), ' 😥 ');
        console.log(' ');

        // console.log('TOTAL: ', totalLinks.length ,'\nUnique: ', uniqueLinks.size,'\nBroken: ',brokenLinks.length)
    })
    .catch( error => console.log('❗❗',chalk.white.bgRed( error), '❗❗'))
}
// validateStats('prueba.md');


module.exports = {
    mdLinksDefault,
    mdLinksValidate,
    mdLinksstats,
    validateStats
}