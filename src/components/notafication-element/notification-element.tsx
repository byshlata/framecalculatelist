import React, { FC, useState } from 'react';

import { ActionIcon, Notification } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { InfoCircle } from 'tabler-icons-react';

import { StyledButtonInformationItem } from './styled/styled-button-information-item';
import { StyledInformationWindow } from './styled/styled-information-window';
import { StyledItemText } from './styled/styled-item-text';
import { StyledWrapper } from './styled/styled-wrapper';
import { NotificationElementType } from './types/notification-element-type';

export const NotificationElement: FC<NotificationElementType> = ({
  text,
  title,
  children,
}) => {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));
  const onClickButtonInformation = (): void => {
    setOpened(!opened);
  };

  const textNotification = Array.isArray(text) ? text : [text];

  return (
    <StyledWrapper ref={ref}>
      {children}
      <StyledButtonInformationItem>
        <ActionIcon variant="light" onClick={onClickButtonInformation}>
          <InfoCircle size="1rem" />
        </ActionIcon>
      </StyledButtonInformationItem>

      <StyledInformationWindow isOpen={opened}>
        <Notification title={title} withCloseButton={false}>
          {textNotification.map((text) => (
            <StyledItemText key={text}>{text}</StyledItemText>
          ))}
        </Notification>
      </StyledInformationWindow>
    </StyledWrapper>
  );
};
