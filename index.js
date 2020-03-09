const { isNumber } = require('./lib/types.js');
const { isString } = require('./lib/types.js');
const { isBoolean } = require('./lib/types.js');
const { isArray } = require('./lib/types.js');



console.log(isNumber('3'));
console.log(isString('Name'));
console.log(isBoolean(true));
console.log(isArray(true));