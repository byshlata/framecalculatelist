import React, { ReactElement } from 'react';

import { Flex, Space } from '@mantine/core';
import { useSelector } from 'react-redux';
import { ShoppingCartOff } from 'tabler-icons-react';

import { TabletFrame } from '../../components';
import { useAppDispatch } from '../../hooks';

import { text } from './data/text';

import { deleteOrder, selectorOrders } from 'store';

export const Cart = (): ReactElement => {
  const dispatch = useAppDispatch();
  const orders = useSelector(selectorOrders);

  const onDeleteOrder = (id?: string): void => {
    if (id) {
      dispatch(deleteOrder({ id }));
    }
  };

  return (
    <Flex direction="column" justify="center" align="center">
      {orders.length ? (
        orders.map(({ lengthCell, widthCell, id, totalTableSum, tablet }) => (
          <div key={id}>
            <TabletFrame
              buttonName={text.button.name}
              id={id}
              lengthCell={lengthCell}
              widthCell={widthCell}
              bodyTable={tablet}
              totalTableSum={totalTableSum}
              onClick={onDeleteOrder}
            />
            <Space h="md" />
          </div>
        ))
      ) : (
        <ShoppingCartOff size={250} strokeWidth={2} color="gray" opacity="0.5" />
      )}
    </Flex>
  );
};
