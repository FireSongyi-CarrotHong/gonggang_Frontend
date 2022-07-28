import * as React from 'react';
import { BaseLayoutProps } from '../../shared/const';
import { ModalBackground, ModalStyled } from '../atoms/CommonStyled';

export interface SmallModalProps extends BaseLayoutProps {
  // eslint-disable-next-line no-undef
  contentComponent: JSX.Element;
}

export default function ModalSmall({
  contentComponent,
  ...rest
}: SmallModalProps) {
  return (
    <ModalBackground active>
      <ModalStyled modalType="small" {...rest}>
        {contentComponent}
      </ModalStyled>
    </ModalBackground>
  );
}
