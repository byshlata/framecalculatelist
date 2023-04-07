import { FC } from 'react';

import { AppShell, Container, MantineProvider } from '@mantine/core';

import { FooterApp, HeaderApp } from '../components';

import { Routers } from 'pages';

export const App: FC = () => {
  return (
    <MantineProvider
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 960,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
    >
      <AppShell padding="md" header={<HeaderApp />} footer={<FooterApp />}>
        <Container size="xs">
          <Routers />
        </Container>
      </AppShell>
    </MantineProvider>
  );
};
