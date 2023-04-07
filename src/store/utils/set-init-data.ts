import config from '../../assets/data/config.json';
import data from '../../assets/data/data.json';

import { convertMillimeters } from './convertMillimeters';

import { FrameData } from 'enums';
import { Material } from 'enums/material';
import { InitialStateAppType } from 'store';
import {
  FixType,
  FrameType,
  MaterialConstructionType,
  MaterialType,
  SizeType,
  UndefinedType,
} from 'types';

export const setInitData = (): UndefinedType<InitialStateAppType> => {
  try {
    const initInformation: InitialStateAppType = {
      materialConstruction: {
        [Material.List]: [],
        [Material.Fix]: [],
        [Material.Pipe]: [],
      },
      size: [],
      frame: [],
      material: [],
      fix: [],
    };

    config.forEach((dataFromFile) => {
      if (dataFromFile.type === FrameData.Size) {
        const data = convertMillimeters(dataFromFile) as SizeType;

        initInformation?.size?.push(data);
      }

      if (dataFromFile.type === FrameData.Material) {
        const data = convertMillimeters(dataFromFile) as MaterialType;

        initInformation?.material?.push(data);
      }

      if (dataFromFile.type === FrameData.Frame) {
        const data = convertMillimeters(dataFromFile) as FrameType;

        initInformation?.frame?.push(data);
      }

      if (dataFromFile.type === FrameData.Fix) {
        const data = convertMillimeters(dataFromFile) as FixType;

        initInformation?.fix?.push(data);
      }
    });

    data.forEach((dataMaterial) => {
      if (dataMaterial.type === Material.List) {
        const data = convertMillimeters(
          dataMaterial,
        ) as MaterialConstructionType<Material.List>;

        initInformation?.materialConstruction?.[Material.List]?.push(data);
      }

      if (dataMaterial.type === Material.Pipe) {
        const data = convertMillimeters(
          dataMaterial,
        ) as MaterialConstructionType<Material.Pipe>;

        initInformation?.materialConstruction?.[Material.Pipe]?.push(data);
      }

      if (dataMaterial.type === Material.Fix) {
        const data = convertMillimeters(
          dataMaterial,
        ) as MaterialConstructionType<Material.Fix>;

        initInformation?.materialConstruction?.[Material.Fix]?.push(data);
      }
    });

    return initInformation;
  } catch (err) {
    throw new Error('There is an error in this file');
  }
};
