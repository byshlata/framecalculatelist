import { createSlice } from '@reduxjs/toolkit';

import { Material } from 'enums/material';
import {
  FixType,
  FrameType,
  MaterialConstructionType,
  MaterialType,
  SizeType,
} from 'types';

export type InitialStateAppType = {
  materialConstruction: {
    [Material.List]: MaterialConstructionType<Material.List>[];
    [Material.Fix]: MaterialConstructionType<Material.Fix>[];
    [Material.Pipe]: MaterialConstructionType<Material.Pipe>[];
  };
  size: SizeType[];
  frame: FrameType[];
  material: MaterialType[];
  fix: FixType[];
};

export const initialStateApp: InitialStateAppType = {
  materialConstruction: {
    [Material.List]: [],
    [Material.Fix]: [],
    [Material.Pipe]: [],
  },
  fix: [],
  material: [],
  frame: [],
  size: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState: initialStateApp,
  reducers: {},
});

//* export const { logout } = appSlice.actions;
