const {mdLinks} = require('../src/index.js');
const main = require('../src/main.js');
const {ouput, ouputValidateTrue} = require('./testCases.js');


describe('existsRoute', () => {
  it('should return True if a path exists', () => {
    const existsRoute = main.existsRoute('prueba.md');
    expect(existsRoute).toBe(true)
  });
  it('should return False if a path does not exists', () => {
    expect(main.existsRoute('prueba1.md')).toBe(false)
  });
 
});

describe('MDLINKS', () => {
   it('MD-LINKS validate false', () => {
    mdLinks('prueba.md', {validate:false}).then((link) => {
      expect(link).toEqual(ouput)
    })
  });

  it('MD-LINKS validate true', () => {
    mdLinks('prueba.md', {validate:true}).then((link) => {
      console.log(link);
      expect(link).toEqual(ouputValidateTrue)
    })
  });
});

