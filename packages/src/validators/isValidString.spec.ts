import isValidString from './isValidString';

describe('isValidString', () => {
  it('입력값이 undefined인 경우 false를 반환한다.', () => {
    expect(isValidString(undefined)).toBe(false);
  });

  it('빈 문자열을 입력하면 false를 반환한다.', () => {
    expect(isValidString('')).toBe(false);
  });

  it('숫자만 포함된 문자열을 입력하면 true를 반환한다.', () => {
    expect(isValidString('123456')).toBe(true);
  });

  it('양쪽에 공백이 있는 숫자 문자열("  123456  ")을 입력해도 true를 반환한다.', () => {
    expect(isValidString('  123456  ')).toBe(true);
  });

  it('숫자와 알파벳이 섞인 문자열("123abc")을 입력하면 true를 반환한다.', () => {
    expect(isValidString('123abc')).toBe(true);
  });

  it('특수 문자가 포함된 문자열("!@#")을 입력하면 true 반환한다.', () => {
    expect(isValidString('!@#')).toBe(true);
  });
});
