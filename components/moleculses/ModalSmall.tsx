import * as React from 'react';
import { BaseLayoutProps } from '../../shared/const';
import { ModalBackground, ModalStyled } from '../atoms/CommonStyled';

export interface SmallModalProps extends BaseLayoutProps {
  active: boolean;
}

export default function ModalSmall({
  active,
  children,

  ...rest
}: SmallModalProps) {
  return (
    <ModalBackground active={active}>
      <ModalStyled modalType="small" {...rest}>
        {children}
      </ModalStyled>
    </ModalBackground>
  );
}
