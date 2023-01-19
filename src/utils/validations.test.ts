import {describe, expect, test} from '@jest/globals';
import validations from "./validation";

describe('validation module', () => {
    test('isNotEmpty', () => {
        const email = "test@gmail.com";
        expect(validations.isEmail(email)).toBe(true);
    });
});
