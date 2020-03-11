const Schema = require('./Schema');

describe('Schema', () => {
  let schema;

  // before each test
  beforeEach(() => {
    schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    });
  });

  it('can validate an object with the proper schema', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    expect(schema.validate(dog)).toEqual({
      name: 'spot',
      age: 5,
      weight: '20 lbs'});
  });

});