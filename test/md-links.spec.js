const mdLinks = require('../src/index.js');
const main = require('../src/main.js');


describe('existsRoute', () => {
  it('should return True if a path exists', () => {
    const existsRoute = main.existsRoute('prueba.md');
    console.log(existsRoute);
    expect(existsRoute).toBe(true)
  });
  it('should return False if a path does not exists', () => {
    expect(main.existsRoute('prueba1.md')).toBe(false)
  });
});


