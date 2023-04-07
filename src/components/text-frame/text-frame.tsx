import React, { FC } from 'react';

import { Flex, List, Space, Title } from '@mantine/core';

import { TextFrameType } from './types/text-frame-type';

export const TextFrame: FC<TextFrameType> = ({ title, description }) => {
  return (
    <Flex direction="column" style={{ width: '100%' }}>
      <Title order={2} color="black">
        {title}
      </Title>
      <Space h={10} />
      <List>
        {description.map((text) => (
          <List.Item key={text}>{text}</List.Item>
        ))}
      </List>
      <Space h={10} />
    </Flex>
  );
};
