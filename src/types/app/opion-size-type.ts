import { MaxMinType } from './max-min-type';

import { KeyData } from 'enums';

export type OptionSizeType = {
  [KeyData.Length]?: MaxMinType;
  [KeyData.Width]?: MaxMinType;
};
