import React, { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from 'enums';
import { Cart, FrameCalculate, Home } from 'pages';

export const Routers: FC = () => (
  <Routes>
    <Route path={Path.Root} element={<Navigate to={Path.Home} />} />
    <Route path={Path.Home} element={<Home />} />
    <Route path={Path.Cart} element={<Cart />} />
    <Route path={Path.FrameCalculate} element={<FrameCalculate />} />
    <Route path={Path.Other} element={<Navigate to={Path.Home} />} />
  </Routes>
);
