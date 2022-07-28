import * as React from 'react';
import styled, { css } from 'styled-components';

export interface TextBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: 'small' | 'bigDark' | 'bigLight';
  active: boolean;
}

const lightBtnStyled = css`
  background-color: ${({ theme }) => theme.color.lightViolet};
  box-shadow: ${({ theme }) => theme.boxShadow.onButton.default};
  cursor: pointer;
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.onButton.push};
  }
`;

const darkOffBtnStyled = css`
  background-color: ${({ theme }) => theme.color.veryPeri300};
  box-shadow: ${({ theme }) => theme.boxShadow.offButton.default};
`;

const darkOnBtnStyled = css`
  background-color: ${({ theme }) => theme.color.veryPeri};
  box-shadow: ${({ theme }) => theme.boxShadow.onButton.default};
  cursor: pointer;
  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.onButton.push};
  }
`;

const buttonStyled = ({
  btnType,
  active,
}: {
  btnType: TextBtnProps['btnType'];
  active: TextBtnProps['active'];
}) => {
  switch (btnType) {
    case 'bigLight':
      return lightBtnStyled;

    default:
      return active ? darkOnBtnStyled : darkOffBtnStyled;
  }
};

const ButtonStyled = styled.button<TextBtnProps>`
  width: ${({ btnType }) => (btnType === 'small' ? '120px' : '400px')};
  height: ${({ btnType }) => (btnType === 'small' ? '50px' : '60px')};
  padding: 13px;
  color: white;
  font-size: 20px;
  line-height: 24.2px;
  border-radius: 34.5px;
  ${buttonStyled}
`;

export default function TextBtn(props: TextBtnProps) {
  return <ButtonStyled {...props} />;
}
