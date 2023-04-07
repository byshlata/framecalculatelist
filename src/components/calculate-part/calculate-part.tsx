import React, { FC } from 'react';

import { text } from '../tablet-frame/data/data';
import { TabletFrame } from '../tablet-frame/tablet-frame';

import { CalculatePartType } from './types/calculate-part-type';

import { useAppDispatch, useFix } from 'hooks';
import { addOrder } from 'store';
import { TabletType } from 'types';
import { calculateSum, calculateSimplePrice, Frame } from 'utils';

export const CalculatePart: FC<CalculatePartType> = ({
  listInformation,
  strengthInformation,
  width,
  length,
  pipeInformation,
}) => {
  const dispatch = useAppDispatch();
  const {
    sum: fixSum,
    counter: fixCounter,
    unit: fixUnit,
    name: fixName,
  } = useFix(listInformation?.material, width, length);

  const FrameInstance = new Frame(
    width,
    length,
    strengthInformation?.step,
    listInformation?.width,
    pipeInformation?.width,
  );

  const { numberList, lengthCell, widthCell, pipeLength } =
    FrameInstance.calculateDataFrame();

  const bodyTable: Partial<TabletType>[] = [
    {
      name: listInformation?.name,
      unit: listInformation?.unit,
      counter: numberList,
      sum: calculateSimplePrice(listInformation?.price, numberList),
    },
    {
      name: pipeInformation?.name,
      unit: pipeInformation?.unit,
      counter: pipeLength,
      sum: calculateSimplePrice(pipeInformation?.price, pipeLength),
    },
    {
      name: fixName,
      unit: fixUnit,
      counter: fixCounter,
      sum: fixSum,
    },
  ];

  const totalTableSum = calculateSum(bodyTable);

  const onAddCart = (): void => {
    dispatch(
      addOrder({
        lengthCell,
        widthCell,
        tablet: bodyTable,
        totalTableSum,
      }),
    );
  };

  return (
    <TabletFrame
      buttonName={text.button.name}
      onClick={onAddCart}
      lengthCell={length}
      widthCell={widthCell}
      bodyTable={bodyTable}
      totalTableSum={totalTableSum}
    />
  );
};
