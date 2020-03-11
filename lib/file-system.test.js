const fs = require('fs').promises;


const { writeJSON, readJSON, updateJSON, mkdirp, deleteFile,
  readDirectoryJSON } = require('./file-system');


describe('file testing', () => {
  
  afterAll(() => {
    return fs.unlink('./dog.json', './directory/dirp');
  });

  it('will write a json file', () => {
    return writeJSON('./dog.json', { dog: 'spot' })
      .then(() => fs.readFile('./dog.json', { encoding: 'utf8' }))
      .then(writeText => {
        expect(writeText).toEqual('{"dog":"spot"}');
      });
  });

  it('it will read a json file', () => {
    return readJSON(('./testing.json'))
      .then(copyText => {
        expect(copyText).toEqual({ dog:'spot' });
      });
  });

  it('will update a json file', () => {
    return updateJSON('./dog.json', { dog: 'spot', age: 10 })
      .then(() => fs.readFile('./dog.json', { encoding: 'utf8' }))
      .then(updateJSON => {
        expect(updateJSON).toEqual('{"dog":"spot", "age: "10"}');

      })
  });

  it('will make a directory and all its parent directories', () => {
    return mkdirp('./cooldirectory/dirp')
      .then(() => fs.stat('./cooldirectory/dirp'))
      .then(stat => {
        expect(stat.isDirectory()).toBeTruthy();
      });
  });



});