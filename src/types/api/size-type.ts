import { CommonType } from './common-type';

import { FrameData, KeyData } from 'enums';

export type SizeType = CommonType<FrameData.Size, KeyData.Length | KeyData.Width> & {
  min: number;
  max: number;
  step: number;
};
