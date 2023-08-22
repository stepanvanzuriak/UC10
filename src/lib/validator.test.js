import { validate } from "./validator";

describe('validate', () => {
  test('should return true for valid string', () => {
    const testStr = 'Aa1!';
    expect(validate(testStr)).toBe(true);
  });

  test('should return false for string missing uppercase', () => {
    const testStr = 'aa1!';
    expect(validate(testStr)).toBe(false);
  });

  test('should return false for string missing lowercase', () => {
    const testStr = 'AA1!';
    expect(validate(testStr)).toBe(false);
  });

  test('should return false for string missing digit', () => {
    const testStr = 'Aaa!';
    expect(validate(testStr)).toBe(false);
  });

  test('should return false for string missing special character', () => {
    const testStr = 'Aa1a';
    expect(validate(testStr)).toBe(false);
  });

  test('should return false for string with whitespace character', () => {
    const testStr = 'Aa 1!';
    expect(validate(testStr)).toBe(false);
  });

  test('should return false for too short string', () => {
    const testStr = 'A1!';
    expect(validate(testStr)).toBe(false);
  });

  test('should return false for too long string', () => {
    const testStr = 'Aa1!'.repeat(10 + 1);
    expect(validate(testStr)).toBe(false);
  });
});
