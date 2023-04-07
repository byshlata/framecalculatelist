import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Material } from 'enums';
import { selectorLists } from 'store';
import { MaterialConstructionType, SelectDataType } from 'types';

type ReturnType = {
  selectData: SelectDataType[];
  listInformation?: MaterialConstructionType<Material.List>;
  value?: string;
  onSetValue: (value: string) => void;
};
export const useList = (): ReturnType => {
  const [value, setValue] = useState('');
  const lists = useSelector(selectorLists);

  const selectData: SelectDataType[] = lists.map(({ name, material }) => ({
    value: name,
    label: name,
    group: material || '',
  }));

  const listInformation = lists.find(({ name }) => name === value);

  const onSetValue = (value: string): void => {
    setValue(value);
  };

  return { selectData, listInformation, onSetValue, value };
};
