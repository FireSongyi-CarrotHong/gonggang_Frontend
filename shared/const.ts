/* eslint-disable no-undef */
import * as React from 'react';

export interface BaseProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

export interface BaseLayoutProps extends BaseProps {
  children?: React.ReactNode;
}
