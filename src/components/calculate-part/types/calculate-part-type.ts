import { Material } from 'enums';
import { FrameType, MaterialConstructionType } from 'types';

export type CalculatePartType = {
  length: number;
  width: number;
  listInformation?: MaterialConstructionType<Material.List>;
  strengthInformation?: FrameType;
  pipeInformation?: MaterialConstructionType<Material.Pipe>;
};
