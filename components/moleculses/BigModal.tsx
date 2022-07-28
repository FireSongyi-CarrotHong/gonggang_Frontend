import * as React from 'react';
import styled from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';

export interface BigModalProps extends BaseLayoutProps {
  active: boolean;
}

const ModalWrapper = styled.div<Pick<BigModalProps, 'active'>>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: fixed;
  background-color: ${({ theme }) => theme.color.black600};
`;

const ModalStyled = styled.div`
  width: 440px;
  height: 520px;
`;

export default function BigModal({ active, ...rest }: BigModalProps) {
  return (
    <ModalWrapper active={active}>
      <ModalStyled {...rest} />
    </ModalWrapper>
  );
}
