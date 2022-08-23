const mdLinks = require('./index.js');
const main = require('./main.js');


describe('existsRoute', () => {
  it('should return True if a path exists', () => {
    expect(main.rexistsRoute(path)).toBe(true)
  });
  it('should return False if a path does not exists', () => {
    expect(main.rexistsRoute(falsePath)).toBe(false)
  });
});
