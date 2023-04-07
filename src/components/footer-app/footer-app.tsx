import React, { FC } from 'react';

import { ActionIcon, Footer } from '@mantine/core';

import { buttons } from './data/buttons';
import { StyledButtonWrapper, StyledContainer, StyledFlex } from './styled/styled-footer';

import { generateKey } from 'utils';

export const FooterApp: FC = () => {
  const onClickButton = (url: string): void => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <Footer height={60}>
      <StyledContainer size="xs">
        <StyledFlex align="center">
          {buttons.map(({ url, icon }, index) => (
            <StyledButtonWrapper key={generateKey(index)}>
              <ActionIcon variant="filled" onClick={() => onClickButton(url)}>
                {icon}
              </ActionIcon>
            </StyledButtonWrapper>
          ))}
        </StyledFlex>
      </StyledContainer>
    </Footer>
  );
};
