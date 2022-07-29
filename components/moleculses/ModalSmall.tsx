import * as React from 'react';
import { BaseLayoutProps } from '../../shared/const';
import { ModalBackground, ModalStyled } from '../atoms/CommonStyled';

export interface SmallModalProps extends BaseLayoutProps {
  active: boolean;
  // eslint-disable-next-line no-undef
  contentComponent: JSX.Element;
}

export default function ModalSmall({
  active,
  contentComponent,
  ...rest
}: SmallModalProps) {
  return (
    <ModalBackground active={active}>
      <ModalStyled modalType="small" {...rest}>
        {contentComponent}
      </ModalStyled>
    </ModalBackground>
  );
}
