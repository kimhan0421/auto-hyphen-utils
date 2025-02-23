import { autoHyphenPhoneNumber } from './autoHyphenPhoneNumber';
import { commonAutoHyphen } from './common';

const autoHyphen = {
  common: commonAutoHyphen,
  phoneNumber: autoHyphenPhoneNumber,
};

export default autoHyphen;
