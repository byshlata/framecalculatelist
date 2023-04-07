import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Material } from 'enums';
import { selectorPipes } from 'store';
import { MaterialConstructionType, SelectDataType } from 'types';

type ReturnType = {
  selectData: SelectDataType[];
  pipeInformation?: MaterialConstructionType<Material.Pipe>;
  value?: string;
  onSetValue: (value: string) => void;
};
export const usePipe = (): ReturnType => {
  const [value, setValue] = useState('');
  const pipes = useSelector(selectorPipes);

  const selectData: SelectDataType[] = pipes.map(({ name }) => ({
    value: name,
    label: name,
  }));

  const pipeInformation = pipes.find(({ name }) => name === value);

  const onSetValue = (value: string): void => {
    setValue(value);
  };

  return { selectData, pipeInformation, onSetValue, value };
};
