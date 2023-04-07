import React, { FC, useState } from 'react';

import { Button, Flex, NumberInput, Select, Space } from '@mantine/core';
import { useSelector } from 'react-redux';

import { textPage } from './data/text-page';

import { NotificationElement, CalculatePart } from 'components';
import { KeyData } from 'enums';
import { useList, usePipe, useStrength } from 'hooks';
import { effects } from 'pages/frame-calculate/data/effects';
import { selectorFrameOptionSize } from 'store';
import { createTitle } from 'utils';

export const FrameCalculate: FC = () => {
  const frameOptionSize = useSelector(selectorFrameOptionSize);
  const { listInformation, value, onSetValue, selectData } = useList();
  const {
    strengthInformation,
    value: valueStrength,
    onSetValue: onSetValueStrength,
    selectData: selectDataStrength,
  } = useStrength();

  const {
    pipeInformation,
    value: valuePipe,
    onSetValue: onSetValuePipe,
    selectData: selectDataPipe,
  } = usePipe();
  const [length, setLength] = useState(frameOptionSize?.[KeyData.Length]?.min);
  const [width, setWidth] = useState(frameOptionSize?.[KeyData.Width]?.min);
  const [firstCalculate, setFirstCalculate] = useState(false);

  const isDisableButtonCalculate = !(
    listInformation &&
    strengthInformation &&
    length &&
    width &&
    pipeInformation
  );

  const inputWidthDescription = createTitle(textPage.inputWidth.description, [
    ['от', frameOptionSize[KeyData.Width]?.min],
    ['до', frameOptionSize[KeyData.Width]?.max],
  ]);

  const inputLengthDescription = createTitle(textPage.inputLength.description, [
    ['от', frameOptionSize[KeyData.Length]?.min],
    ['до', frameOptionSize[KeyData.Length]?.max],
  ]);

  const onChangeLength = (value: number): void => {
    setLength(value);
  };

  const onChangeWidth = (value: number): void => {
    setWidth(value);
  };

  const onFirstCalculate = (): void => {
    setFirstCalculate(true);
  };

  return (
    <>
      <Flex
        mih={50}
        gap="sm"
        justify="start"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <Select
          label={textPage.selectList.label}
          placeholder={textPage.selectList.placeholder}
          data={selectData}
          value={value}
          transitionProps={effects}
          onChange={onSetValue}
        />

        <NotificationElement
          text={textPage.informationBlock.text}
          title={textPage.informationBlock.title}
        >
          <Select
            label={textPage.selectStrength.label}
            placeholder={textPage.selectStrength.placeholder}
            data={selectDataStrength}
            value={valueStrength}
            transitionProps={effects}
            onChange={onSetValueStrength}
          />
        </NotificationElement>
        <Select
          label={textPage.selectPipe.label}
          placeholder={textPage.selectPipe.placeholder}
          data={selectDataPipe}
          value={valuePipe}
          transitionProps={effects}
          onChange={onSetValuePipe}
        />

        <NumberInput
          defaultValue={length}
          value={length}
          step={frameOptionSize?.[KeyData.Length]?.step}
          onChange={onChangeLength}
          max={frameOptionSize?.[KeyData.Length]?.max}
          min={frameOptionSize?.[KeyData.Length]?.min}
          placeholder={textPage.inputLength.placeholder}
          description={inputLengthDescription}
          label={textPage.inputLength.label}
          withAsterisk
        />

        <NumberInput
          defaultValue={width}
          value={width}
          step={frameOptionSize?.[KeyData.Width]?.step}
          onChange={onChangeWidth}
          max={frameOptionSize?.[KeyData.Width]?.max}
          min={frameOptionSize?.[KeyData.Width]?.min}
          description={inputWidthDescription}
          placeholder={textPage.inputLength.placeholder}
          label={textPage.inputWidth.label}
          withAsterisk
        />
        <Button disabled={isDisableButtonCalculate} onClick={onFirstCalculate}>
          {textPage.buttonCalculate.name}
        </Button>
      </Flex>
      <Space h="md" />
      {!isDisableButtonCalculate && firstCalculate && (
        <CalculatePart
          length={length}
          width={width}
          listInformation={listInformation}
          strengthInformation={strengthInformation}
          pipeInformation={pipeInformation}
        />
      )}
    </>
  );
};
