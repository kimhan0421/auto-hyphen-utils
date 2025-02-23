import { commonAutoHyphen } from '../common';
import { isValidString } from '../validators';

/**
 * @name 전화번호에 하이픈을 자동으로 추가하는 함수
 * @description 010-123-1234 및 010-1234-1234 형식 지원
 *
 * @param {string} value - 문자열
 * @returns {string} - 하이픈이 추가된 문자열
 */
export function autoHyphenPhoneNumber(value?: string): string {
  if (!value || !isValidString(value)) {
    return '';
  }

  const cleanValue = value.replace(/[^0-9]/g, '');

  const pattern = cleanValue.length === 10 ? [3, 3, 4] : [3, 4, 4];
  return commonAutoHyphen(cleanValue, pattern);
}
