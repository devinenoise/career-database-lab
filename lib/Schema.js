const Validator = require('./Validator');

module.exports = class Schema {
  constructor(schema) {
    this.schema = schema;
    this.properties = Object.entries(schema)
      .map(([field, configuration]) => new Validator(field, configuration));
  }

  validate(obj) {
    const validated = {};
    const errors = [];
    this.properties
      .forEach(validator => {
        try {
          validated[validator.field] = validator.validate(obj);
        } catch (e) {
          errors.push(e);
        }
      });
    if (errors.length > 0) {
      throw new Error(`invalid schema >> ${errors}`);
    }
    return validated;
  }
};