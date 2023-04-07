import { Container, Flex } from '@mantine/core';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  height: 100%;
`;

export const StyledFlex = styled(Flex)`
  height: 100%;
`;

export const StyledButtonWrapper = styled.div`
  &:not(:first-child) {
    margin-left: 16px;
  }
`;
