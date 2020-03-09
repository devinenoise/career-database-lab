const { isNumber, isString } = require('../lib/types.js');


describe('validator module', () => {
    describe('number validation', () => {
      it('properly tells if a value is a number', () => {
        expect(isNumber(3)).toBeTruthy();
        expect(isNumber('hi')).toBeFalsy();
        // expect(isNumber([])).toBeFalsy();
        // expect(isNumber({})).toBeFalsy();
        // expect(isNumber(() => {})).toBeFalsy();
        // expect(isNumber(true)).toBeFalsy();
      });

      describe('string validation', () => {
        it('properly tells if a value is a string', () => {
          expect(isNumber('hi')).toBeTruthy();
          expect(isNumber('3')).toBeFalsy();
        //   expect(isNumber([])).toBeFalsy();
        //   expect(isNumber({})).toBeFalsy();
        //   expect(isNumber(() => {})).toBeFalsy();
        //   expect(isNumber(true)).toBeFalsy();
        });


    });