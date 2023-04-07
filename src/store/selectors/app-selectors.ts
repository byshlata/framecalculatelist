import { KeyData, Material } from 'enums';
import { AppRootStore } from 'store';
import {
  FixType,
  FrameType,
  MaterialConstructionType,
  OptionSizeType,
  UndefinedType,
} from 'types';

export const selectorLists = (
  state: AppRootStore,
): MaterialConstructionType<Material.List>[] =>
  state.app?.materialConstruction?.[Material.List];

export const selectorPipes = (
  state: AppRootStore,
): MaterialConstructionType<Material.Pipe>[] =>
  state.app?.materialConstruction?.[Material.Pipe];

export const selectorFrameStrength = (state: AppRootStore): FrameType[] =>
  state.app?.frame;

export const selectorFixInformation = (
  state: AppRootStore,
): UndefinedType<MaterialConstructionType<Material.Fix>> =>
  state.app?.materialConstruction?.[Material.Fix]?.[0];

export const selectorFixes = (state: AppRootStore): FixType[] => state.app?.fix;

export const selectorFrameOptionSize = (state: AppRootStore): OptionSizeType =>
  state.app?.size.reduce((a, b) => {
    if (b.key === KeyData.Width) {
      return { ...a, [KeyData.Width]: { max: b.max, min: b.min, step: b.step } };
    }

    return { ...a, [KeyData.Length]: { max: b.max, min: b.min, step: b.step } };
  }, {});
