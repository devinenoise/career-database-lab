const { isNumber, isString, isBoolean, isArray, isObject, isFunction, castToString, castToNumber, castToBoolean } = require('./lib/types.js');




console.log(isNumber('3'));
console.log(isString('Name'));
console.log(isBoolean(true));
console.log(isArray([]));
console.log(isObject({}));
console.log(isFunction(() => {}));

console.log(castToString('3'));
console.log(castToNumber(3));
console.log(castToBoolean(true));