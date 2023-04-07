import { useState } from 'react';

import { useSelector } from 'react-redux';

import { selectorFrameStrength } from 'store';
import { FrameType, SelectDataType } from 'types';

type ReturnType = {
  selectData: SelectDataType[];
  strengthInformation?: FrameType;
  value?: string;
  onSetValue: (value: string) => void;
};
export const useStrength = (): ReturnType => {
  const [value, setValue] = useState('');
  const lists = useSelector(selectorFrameStrength);

  const selectData: SelectDataType[] = lists.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const strengthInformation = lists.find(({ name }) => name === value);
  const onSetValue = (value: string): void => {
    setValue(value);
  };

  return { selectData, strengthInformation, onSetValue, value };
};
