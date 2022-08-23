const mdLinks = require('./index.js');
  
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
        console.log('TOTAL: ', totalLinks.length ,'\nUnique: ', uniqueLinks.size)
    })
}

const validateStats = (path) => {
    mdLinks.mdLinks(path, { validate: true })
    .then(links =>  {
        const totalLinks = links.map(link => link.href);
        const uniqueLinks = new Set(totalLinks);
        const brokenLinks = links.filter(link => typeof link.status != 'number');
        console.log('TOTAL: ', totalLinks.length ,'\nUnique: ', uniqueLinks.size,'\nBroken: ',brokenLinks.length)
    })
}
// validateStats('prueba.md');


module.exports = {
    mdLinksDefault,
    mdLinksValidate,
    mdLinksstats,
    validateStats
}