import { commonAutoHyphen } from '../common';
import { isValidString } from '../validators';

/**
 * @name 사업자번호에 하이픈을 자동으로 추가하는 함수
 * @description 10자리 또는 13자리 사업자번호 지원
 *
 * @param {string} value - 문자열
 * @returns {string} - 하이픈이 추가된 문자열
 */
export function autoHyphenTinNumber(value?: string): string {
  if (!value || !isValidString(value)) {
    return '';
  }

  // 숫자만 추출
  const cleanValue = value.replace(/\D/g, '');

  // 길이에 따라 패턴 적용
  const pattern =
    cleanValue.length === 10
      ? [3, 2, 5] // 사업자등록번호 (000-00-00000)
      : cleanValue.length === 13
        ? [3, 4, 2, 2, 2] // 법인등록번호 (000-0000-00-00)
        : null;

  if (!pattern) {
    return value;
  }

  return commonAutoHyphen(cleanValue, pattern);
}
