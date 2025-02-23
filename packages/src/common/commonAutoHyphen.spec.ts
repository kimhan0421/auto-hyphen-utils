import commonAutoHyphen from './commonAutoHyphen';
import * as validators from '../validators';

describe('commonAutoHyphen', () => {
  describe('입력값 검증', () => {
    it('값이 undefined 이거나 빈 문자일 경우 빈 문자를 반환한다.', () => {
      expect(commonAutoHyphen(undefined)).toBe('');
      expect(commonAutoHyphen('')).toBe('');
    });
  });

  describe('유효하지 않은 패턴 처리', () => {
    it('패턴이 없을 경우, 입력한 값을 반환한다.', () => {
      expect(commonAutoHyphen('01012345678')).toBe('01012345678');
      jest.restoreAllMocks();
    });
    it('패턴이 빈 배열일 경우, 입력한 값을 반환한다.', () => {
      expect(commonAutoHyphen('01012345678', [])).toBe('01012345678');
      jest.restoreAllMocks();
    });
    it('패턴 배열에 음수 값이 포함한 경우, 입력한 값을 반환한다', () => {
      jest.spyOn(validators, 'isValidString').mockReturnValue(true);
      expect(commonAutoHyphen('01012345678', [3, -4, 4])).toBe('01012345678');
      jest.restoreAllMocks();
    });
  });

  describe('유효한 패턴으로 포맷팅', () => {
    it('패턴을 입력하면 해당 패턴에 따라 올바르게 포맷팅 한다', () => {
      jest.spyOn(validators, 'isValidString').mockReturnValue(true);
      expect(commonAutoHyphen('01012345678', [3, 4, 4])).toBe('010-1234-5678');
      expect(commonAutoHyphen('123456789', [2, 2, 2, 3])).toBe('12-34-56-789');
      jest.restoreAllMocks();
    });

    it('입력값이 "1234567899999999"이고 패턴이 [2,2,2]이면 "12-34-567899999999"를 반환한다', () => {
      jest.spyOn(validators, 'isValidString').mockReturnValue(true);
      expect(commonAutoHyphen('1234567899999999', [2, 2, 2])).toBe('12-34-567899999999');
      jest.restoreAllMocks();
    });
  });
});
