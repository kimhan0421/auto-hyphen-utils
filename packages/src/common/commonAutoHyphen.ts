import isValidString from "../validators/isValidString";

/**
 * 지정된 패턴에 따라 입력 값에 하이픈을 자동으로 추가하는 함수
 *
 * @param {string} value - 포맷할 입력 문자열입니다.
 * @param {Array<number>} pattern - 하이픈 삽입 위치를 지정하는 배열입니다.
 * @returns {string} - 하이픈이 추가된 문자열을 반환합니다.
 */
export default function commonAutoHyphen(
  value: string,
  pattern: number[]
): string {
  if (!isValidString(value) || !Array.isArray(pattern)) {
    throw new Error("유효하지 않은 입력 입니다.");
  }

  const cleanValue = value.replace(/[^0-9]/g, "");
  const result = pattern.reduce(
    (acc, length, index) => {
      if (acc.position < cleanValue.length) {
        const part = cleanValue.slice(acc.position, acc.position + length);
        acc.result += part;
        acc.position += length;
        if (index < pattern.length - 1 && acc.position < cleanValue.length) {
          acc.result += "-";
        }
      }
      return acc;
    },
    { result: "", position: 0 }
  );

  return result.result;
}
