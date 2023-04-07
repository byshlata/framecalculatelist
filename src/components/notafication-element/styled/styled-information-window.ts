import styled from 'styled-components';

export const StyledInformationWindow = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => !isOpen && 'none'};
  position: absolute;
  transform: translateY(100%);
  bottom: 0;
  left: 0;
  z-index: 150;
`;
