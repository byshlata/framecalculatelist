import React, { FC } from 'react';

import { Button, Flex, Space, Text } from '@mantine/core';

import { TabletElement } from '../tablet-element/tablet-element';

import { text } from './data/data';
import { tabletHead } from './data/tablet-head';
import { TabletFrameType } from './types/tablet-frame-type';

export const TabletFrame: FC<TabletFrameType> = ({
  id,
  onClick,
  totalTableSum,
  widthCell,
  lengthCell,
  bodyTable,
  buttonName,
}) => {
  return (
    <Flex direction="column">
      <Text fz="lg">
        {text.cells} {lengthCell}х{widthCell}
      </Text>
      <Space h="md" />
      <TabletElement bodyTablet={bodyTable} head={tabletHead} />
      <Space h="md" />
      <Flex justify="space-between">
        <Text fz="xl" color="black">
          {text.totalSum} {totalTableSum}
        </Text>
        <Button uppercase onClick={() => onClick(id)}>
          {buttonName}
        </Button>
      </Flex>
    </Flex>
  );
};
