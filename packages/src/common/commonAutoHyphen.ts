import { isValidString } from '../validators';

/**
 * @name 지정된 패턴에 따라 입력 값에 하이픈을 자동으로 추가하는 함수
 *
 * @param {string} value - 포맷할 입력 문자열입니다.
 * @param {Array<number>} pattern - 하이픈 삽입 위치를 지정하는 배열입니다. 기본값은 `[3, 4, 4]`
 *  @returns {string} - 하이픈이 추가된 문자열을 반환합니다.
 *   - 유효하지 않은 입력값이 주어진 경우 빈 문자열 (`""`)을 반환합니다.
 *   - `pattern`이 유효하지 않은 경우, 숫자 문자열을 그대로 반환합니다.
 */
export default function commonAutoHyphen(value?: string, pattern: number[] = []): string {
  if (!value || !isValidString(value)) {
    return '';
  }

  if (!Array.isArray(pattern) || pattern.length === 0 || pattern.some((p) => typeof p !== 'number' || p < 0)) {
    return value;
  }

  const cleanValue = value.replace(/[^0-9]/g, '');

  const { result } = pattern.reduce(
    (acc, length, index) => {
      if (acc.position >= cleanValue.length) {
        return acc;
      }
      if (index === pattern.length - 1) {
        return { result: acc.result + cleanValue.slice(acc.position), position: cleanValue.length };
      } else {
        const part = cleanValue.slice(acc.position, acc.position + length);
        const newPos = acc.position + length;
        const hyphen = newPos < cleanValue.length ? '-' : '';
        return { result: acc.result + part + hyphen, position: newPos };
      }
    },
    { result: '', position: 0 }
  );

  return result;
}
