const { isNumber, isString, isBoolean, isArray, isObject, isFunction, castToNumber, castToString, castToBoolean, getCaster } = require('../lib/types.js');


describe('validator module', () => {
    describe('number validation', () => {
        it('properly tells if a value is a number', () => {
            expect(isNumber(3)).toBeTruthy();
            expect(isNumber('hi')).toBeFalsy();
            expect(isNumber([])).toBeFalsy();
            expect(isNumber({})).toBeFalsy();
        });
    });


    describe('string validation', () => {
        it('properly tells if a value is a string', () => {
            expect(isString('hi')).toBeTruthy();
            expect(isString(3)).toBeFalsy();
            expect(isString([])).toBeFalsy();
            expect(isString(true)).toBeFalsy();
        });
    });

    describe('boolean validation', () => {
        it('properly tells if a value is a Boolean', () => {
            expect(isBoolean(true)).toBeTruthy();
            expect(isBoolean(3)).toBeFalsy();
            expect(isBoolean(0)).toBeFalsy();
        });
    });

    describe('array validation', () => {
        it('properly tells if a value is a Array', () => {
            expect(isArray([])).toBeTruthy();
            expect(isArray(7)).toBeFalsy();
        });
    });

    describe('object validation', () => {
        it('properly tells if a value is an object', () => {
            expect(isObject({})).toBeTruthy();
            expect(isObject(7)).toBeFalsy();
        });
    });

    describe('function validation', () => {
        it('properly tells if a value is a function', () => {
            expect(isFunction(() => { })).toBeTruthy();
            expect(isFunction(3)).toBeFalsy();
        });
    });

    //caster tests
    describe('casters', () => {
        it('can cast values to a number', () => {
            expect(castToNumber(3)).toEqual(3);
            expect(castToNumber('3')).toEqual(3);
            expect(castToNumber(true)).toEqual(1);
            expect(castToNumber(false)).toEqual(0);
            
        });

        it('throws if value is not castable to number', () => {
            expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
            expect(() => castToNumber({ name: null })).toThrowErrorMatchingSnapshot();
        });
        
        
        it('can cast values to a string', () => {
            expect(castToString(3)).toEqual('3');
            expect(castToString('3')).toEqual('3');
            expect(castToString(true)).toEqual('true');
            expect(castToString(false)).toEqual('false');
            
        });

        it('throws if value is not castable to string', () => {
            expect(() => castToString([])).toThrowErrorMatchingSnapshot();
        });
    
        it('can cast values to a boolean', () => {
            expect(castToBoolean(1)).toEqual(true);
            expect(castToBoolean(true)).toEqual(true);
            expect(castToBoolean(false)).toEqual(false);
        });

        it('throws if value is not castable to boolean', () => {
            expect(() => castToBoolean('hi')).toThrowErrorMatchingSnapshot();
            expect(() => castToBoolean({})).toThrowErrorMatchingSnapshot();
        });
    });

    it('can get the right caster', () => {
        expect(getCaster(Number)).toEqual(castToNumber);
        expect(getCaster(String)).toEqual(castToString);
        expect(getCaster(Boolean)).toEqual(castToBoolean);
        expect(getCaster(Promise)).toBeNull();
    });
});