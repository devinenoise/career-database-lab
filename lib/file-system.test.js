const fs = require('fs').promises;


const { writeJSON } = require('./file-system');


describe('file testing', () => {
  afterEach(() => {
    return fs.unlink('./dog.json');
  });

  it('it will write a json file', () => {
    return writeJSON('./dog.json', { dog: 'spot' })
      .then(() => fs.readFile('./dog.json', { encoding: 'utf8' }))
      .then(writeText => {
        expect(writeText).toEqual('{"dog":"spot"}');
      });
  });

  // it('it will write a json file', () => {
  //   return writeJSON('./dog.json', { dog: 'spot' })
  //     .then(() => fs.readFile('./dog.json', { encoding: 'utf8' }))
  //     .then(copyText => {
  //       expect(copyText).toEqual('{"dog":"spot"}');
  //     });
  // });


});