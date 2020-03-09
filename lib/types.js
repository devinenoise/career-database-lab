const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isArray = val => typeof val.isArray([]) === 'object';
// const isObject = val => typeof val === 'object';
// const isFunction = func => typeof function () {} === 'function';


module.exports = {
    isNumber,
    isString,
    isBoolean,
    isArray,
//     isObject,
//     isFunction
};