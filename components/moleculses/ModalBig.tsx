import * as React from 'react';
import styled from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';
import TextBtn from '../atoms/TextBtn';
import { ModalBackground, ModalStyled } from '../atoms/CommonStyled';

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

export default function ModalBig({
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
    <ModalBackground active={active}>
      <ModalStyled modalType="big" {...rest}>
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
    </ModalBackground>
  );
}
