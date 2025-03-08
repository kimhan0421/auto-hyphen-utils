import { autoHyphenPhoneNumber } from './autoHyphenPhoneNumber';
import { autoHyphenTinNumber } from './autoHyphenTinNumber';
import { commonAutoHyphen } from './common';

const autoHyphen = {
  common: commonAutoHyphen,
  phoneNumber: autoHyphenPhoneNumber,
  tinNumber: autoHyphenTinNumber,
};

export default autoHyphen;
