import React, { FC } from 'react';

import { Badge } from '@mantine/core';

import { StyledBadgeItem } from './styled/styled-badge-item';
import { StyledBadgeWrapper } from './styled/styled-badge-wrapper';
import { BadgeElementType } from './types/badge-element-type';

export const BadgeElement: FC<BadgeElementType> = ({ counter, children }) => {
  return (
    <StyledBadgeWrapper>
      {children}
      {!!counter && (
        <StyledBadgeItem>
          <Badge color="green">{counter}</Badge>
        </StyledBadgeItem>
      )}
    </StyledBadgeWrapper>
  );
};
