import React, { FC } from 'react';

import { Table } from '@mantine/core';

import { TabletElementType } from './types/tablet-element-type';

export const TabletElement: FC<TabletElementType> = ({ bodyTablet, head }) => {
  const ths = (
    <tr>
      <th>{head?.name}</th>
      <th>{head?.unit}</th>
      <th>{head?.counter}</th>
      <th>{head?.sum}</th>
    </tr>
  );

  const rows = bodyTablet?.map(({ name, sum, counter, unit }) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{unit}</td>
      <td>{counter}</td>
      <td>{sum}</td>
    </tr>
  ));

  return (
    <Table withBorder withColumnBorders>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
