import React, { FC } from 'react';

import { Flex } from '@mantine/core';

import { task } from './data/task';

import { TextFrame } from 'components';

export const Home: FC = () => {
  return (
    <Flex direction="column">
      <TextFrame title={task.task.title} description={task.task.description} />
      <TextFrame title={task.result.title} description={task.result.description} />
    </Flex>
  );
};
