import styled from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';

export interface ModalProps extends BaseLayoutProps {
  active: boolean;
  modalType: 'big' | 'small';
}

const ModalBackground = styled.div<Pick<ModalProps, 'active'>>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: ${({ theme }) => theme.color.black600};
  z-index: 10;
  * {
    cursor: default;
  }
`;

const ModalStyled = styled.div<Pick<ModalProps, 'modalType'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 40px;
  width: 440px;
  height: ${({ modalType }) => (modalType === 'big' ? '520px;' : '300px')};
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadow.modal};
  border-radius: 30px;
`;

export { ModalBackground, ModalStyled };
