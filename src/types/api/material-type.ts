import { CommonType } from './common-type';

import { FrameData, KeyData } from 'enums';

export type MaterialType = CommonType<
  FrameData.Material,
  KeyData.Plastic | KeyData.Metal
>;
