const mdLinks = require('./index.js');
const chalk = require('chalk');
  
// Printing process.argv property value

const mdLinksDefault = (path) => {
    mdLinks.mdLinks(path, { validate: false })
    .then(e =>  console.log(e))
}

const mdLinksValidate = (path) => {
    mdLinks.mdLinks(path, { validate: true })
    .then(e =>  console.log(e))
}

const mdLinksstats = (path) => {
    mdLinks.mdLinks(path, { validate: true })
    .then(links =>  {
        const totalLinks = links.map(link => link.href);
        const uniqueLinks = new Set(totalLinks);
        console.log(chalk.magentaBright('<─────── VALIDATE OF LINKS  ────────>'));
        console.log('✅', chalk.bgHex('#05DFD7').bold('TOTAL:  ',totalLinks.length), ' 🥳 ')
        console.log('───────────────');
        console.log('✅', chalk.bgHex('#3EC70B').bold('Unique: ', uniqueLinks.size), ' 🥳 ');
    })
}

const validateStats = (path) => {
    mdLinks.mdLinks(path, { validate: true })
    .then(links =>  {
        const totalLinks = links.map(link => link.href);
        const uniqueLinks = new Set(totalLinks);
        const brokenLinks = links.filter(link => typeof link.status != 'number');
        console.log(chalk.magentaBright('<─────── VALIDATE AND STATICS OF LINKS  ────────>'));
        console.log('✅', chalk.bgHex('#3E00FF').bold('TOTAL:  ',totalLinks.length), ' 🥳 ')
        console.log('───────────────');
        console.log('✅', chalk.bgHex('#3EC70B').bold('Unique: ', uniqueLinks.size), ' 🤩 ');
        console.log('───────────────');
        console.log('✅', chalk.bgRed.bold('Broken: ', brokenLinks.length), ' 😥 ');
        // console.log('TOTAL: ', totalLinks.length ,'\nUnique: ', uniqueLinks.size,'\nBroken: ',brokenLinks.length)
    })
}
// validateStats('prueba.md');


module.exports = {
    mdLinksDefault,
    mdLinksValidate,
    mdLinksstats,
    validateStats
}