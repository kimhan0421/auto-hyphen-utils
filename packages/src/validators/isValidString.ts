/**
 * 입력한 값이 유효한 문자열인지 확인
 */
const isValidString = (input?: string): boolean => {
  if (!input || typeof input !== 'string') {
    return false;
  }

  const trimmedInput = input.trim();

  if (!trimmedInput) {
    return false;
  }

  return trimmedInput.length > 0;
};

export default isValidString;
