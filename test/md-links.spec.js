const {mdLinks} = require('../src/index.js');
const main = require('../src/main.js');
const {ouput, ouputValidateTrue} = require('./testCases.js');

const fetch  = require('node-fetch');
jest.mock('node-fetch', () => jest.fn())

describe('MDLINKS', () => {

      it('MD-LINKS validate false', () => {
      mdLinks('pruebas', {validate:false}).then((link) => {
        expect(link).toEqual(ouput)
      })
    });

    it('MD-LINKS validate true', (done) => {
      fetch.mockResolvedValueOnce({status: 200, statusText:'OK'});
      fetch.mockRejectedValueOnce({status: 'ERROR', statusText:'FAIL'});
      fetch.mockResolvedValueOnce({status: 200, statusText:'OK'});
      fetch.mockRejectedValueOnce({status: 'ERROR', statusText:'FAIL'});

      mdLinks('pruebas', {validate:true})
      .then((link) => {
        expect(link).toEqual(ouputValidateTrue);
        done();
      });
      
      
    });
});

// describe('existsRoute', () => {
//   it('should return True if a path exists', () => {
//     const existsRoute = main.existsRoute('prueba.md');
//     expect(existsRoute).toBe(true)
//   });
//   it('should return False if a path does not exists', () => {
//     expect(main.existsRoute('pruebass.md')).toBe(false)
//   });
 
// });

// describe('getAbsoluteRoute', () => {
//   it('should return la ruta absoluta', () => {
//     const getAbsoluteRoute = main.getAbsoluteRoute('prueba.md');
//     expect(getAbsoluteRoute).toBe('D:\\LABORATORIA\\LIM018-md-links\\pruebas\\prueba.md')
//   }); 
// });



