import { CommonType } from './common-type';

import { FrameData, KeyData } from 'enums';

export type FrameType = CommonType<
  FrameData.Frame,
  KeyData.Light | KeyData.Standard | KeyData.Strong
> & {
  step: number;
};
