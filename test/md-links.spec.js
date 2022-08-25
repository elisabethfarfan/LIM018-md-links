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
      fetch.mockResolvedValueOnce({status: 200, statusText:'OK'});
      fetch.mockResolvedValueOnce({status: 404, statusText:'FAIL'});
      fetch.mockResolvedValueOnce({status: 503, statusText:'FAIL'});
      fetch.mockRejectedValueOnce({status: 'ERROR', statusText:'FAIL'});

      mdLinks('pruebas', {validate:true})
      .then((link) => {
        expect(link).toEqual(ouputValidateTrue);
        done();
      })    
      
    });

    it('MD-LINKS la ruta no existe', () => {
      mdLinks('pruebass', {validate:false}).then((link) => {
        expect(link).toEqual('la ruta no existe')
      })
    });
});

// TEST UNITARIOS DE FUNCIONES

describe('existsRoute', () => {
  it('should return True if a path exists', () => {
    const existsRoute = main.existsRoute('pruebas');
    expect(existsRoute).toBe(true)
  });
  it('should return False if a path does not exists', () => {
    expect(main.existsRoute('pruebass')).toBe(false)
  });
 
});

describe('isFile()', () => {
  it('should return True if a path is file', () => {
    const existsRoute = main.isDocFile('pruebas');
    expect(existsRoute).toBe(false)
  });
  it('should return False if a path does not exists', () => {
    expect(main.isDocFile('README.md')).toBe(true)
  });
 
});

describe('getAbsoluteRout()', () => {
  it('should return the path absolute', () => {
    const getAbsoluteRout = main.getAbsoluteRoute('pruebas');
    console.log(getAbsoluteRout);
    expect(getAbsoluteRout).toBe("D:\\LABORATORIA\\LIM018-md-links\\pruebas")
  }); 
 
});

describe('isMD()', () => {
  it('should return false if the path is not .MD', () => {
    const isMD = main.isMD('pruebas');
    expect(isMD).toBe(false)
  });
  it('should return true if a path is .MD', () => {
    expect(main.isDocFile('README.md')).toBe(true)
  });
 
});

describe('readFile()', () => {
  it('should read the file', () => {
    const readFile = main.readFile('test.md');
    expect(readFile).toBe('es un lenguaje de marcado')
  });
 
});

