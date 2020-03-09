const { isNumber, isString, isBoolean, isArray, isObject } = require('../lib/types.js');


describe('validator module', () => {
    describe('number validation', () => {
        it('properly tells if a value is a number', () => {
            expect(isNumber(3)).toBeTruthy();
            expect(isNumber('hi')).toBeFalsy();
        });
    });


    describe('string validation', () => {
        it('properly tells if a value is a string', () => {
            expect(isString('hi')).toBeTruthy();
            expect(isString(3)).toBeFalsy();
        });
    });

    describe('boolean validation', () => {
        it('properly tells if a value is a Boolean', () => {
            expect(isBoolean(true)).toBeTruthy();
            expect(isBoolean(3)).toBeFalsy();
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

    // describe('casters', () => {
    //     it('can cast values to a number', () => {
    //         expect(castToNumber(3)).toEqual(3);
    //         expect(castToNumber('3')).toEqual(3);
    //         expect(castToNumber(true)).toEqual(1);
    //         expect(castToNumber(false)).toEqual(0);
    //     });

    //     it('throws if value is not castable to number', () => {
    //         expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
    //         expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    //     });
    // });

    // it('can get the right caster', () => {
    //     expect(getCaster(Number)).toEqual(castToNumber);
    //     expect(getCaster(Promise)).toBeNull();
    // });
});