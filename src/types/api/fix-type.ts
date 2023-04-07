import { CommonType } from './common-type';

import { FrameData, KeyData } from 'enums';

export type FixType = CommonType<FrameData.Fix, KeyData.Plastic | KeyData.Metal> & {
  value: number;
};
