import * as React from 'react';
import styled from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';
import TextBtn from '../atoms/TextBtn';

export interface BigModalProps extends BaseLayoutProps {
  active: boolean;
  title: string;
  // eslint-disable-next-line no-undef
  contentComponent: JSX.Element;
  leftBtnActive: boolean;
  rightBtnActive: boolean;
  leftBtnText: string;
  rightBtnText: string;
}

const ModalWrapper = styled.div<Pick<BigModalProps, 'active'>>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: fixed;
  top: 0;
  display: flex;
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

const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 40px;
  width: 440px;
  height: 520px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadow.modal};
  border-radius: 30px;
`;

const TitleStyled = styled.div`
  line-height: 36.31px;
  padding-bottom: 24px;
  font-size: 30px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;
  padding-top: 43px;
`;

export default function BigModal({
  active,
  title,
  contentComponent,
  leftBtnActive,
  rightBtnActive,
  leftBtnText,
  rightBtnText,
  ...rest
}: BigModalProps) {
  return (
    <ModalWrapper active={active}>
      <ModalStyled {...rest}>
        <TitleStyled>{title}</TitleStyled>
        {contentComponent}
        <ButtonWrapper>
          <TextBtn btnType="small" active={leftBtnActive}>
            {leftBtnText}
          </TextBtn>
          <TextBtn btnType="small" active={rightBtnActive}>
            {rightBtnText}
          </TextBtn>
        </ButtonWrapper>
      </ModalStyled>
    </ModalWrapper>
  );
}
