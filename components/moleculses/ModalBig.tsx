import * as React from 'react';
import styled from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';
import TextBtn from '../atoms/TextBtn';
import {
  FlexColumnCenterCenterStyled,
  ModalBackground,
  ModalContentStyled,
  ModalStyled,
  Typograpy,
} from '../atoms/CommonStyled';

export interface BigModalProps extends BaseLayoutProps {
  active: boolean;
  title: string;
  // eslint-disable-next-line no-undef
  contentComponent: JSX.Element;
  leftBtnActive: boolean;
  rightBtnActive: boolean;
  leftBtnText: string;
  rightBtnText: string;
  leftClick?: React.MouseEventHandler<HTMLButtonElement>;
  rightClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export default function ModalBig({
  active,
  title,
  contentComponent,
  leftBtnActive,
  rightBtnActive,
  leftBtnText,
  rightBtnText,
  leftClick,
  rightClick,
  ...rest
}: BigModalProps) {
  return (
    <ModalBackground active={active}>
      <ModalStyled modalType="big" {...rest}>
        <ModalContentStyled>
          <FlexColumnCenterCenterStyled>
            <Typograpy
              color="white"
              size="3rem"
              lineHeight="3.6rem"
              margin="2.5rem 0 "
              weight="600"
            >
              {title}
            </Typograpy>
            {contentComponent}
          </FlexColumnCenterCenterStyled>
        </ModalContentStyled>
        <ButtonWrapper>
          <TextBtn btnType="small" active={leftBtnActive} onClick={leftClick}>
            {leftBtnText}
          </TextBtn>
          <TextBtn btnType="small" active={rightBtnActive} onClick={rightClick}>
            {rightBtnText}
          </TextBtn>
        </ButtonWrapper>
      </ModalStyled>
    </ModalBackground>
  );
}
