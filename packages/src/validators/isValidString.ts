/**
 * 제공된 입력이 유효한 문자열인지 확인
 */
const isValidString = (input: string): boolean => {
  const trimmedInput = input.trim();
  return /^[0-9]+$/.test(trimmedInput);
};

export default isValidString;
