import styled, { css, CSSObject, DefaultTheme } from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';

export interface ModalProps extends BaseLayoutProps {
  active: boolean;
  modalType: 'big' | 'small';
}

// 모달 백그라운드

const ModalBackground = styled.div<Pick<ModalProps, 'active'>>`
  ${({ active, theme }) => css`
    display: ${active ? 'flex' : 'none'};
    background-color: ${theme.color.black600};
  `}

  position: fixed;
  top: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  z-index: 10;

  * {
    cursor: default;
  }
`;

// 모달 내부

const ModalStyled = styled.div<Pick<ModalProps, 'modalType'>>`
  width: 35rem;
  background-image: url('https://user-images.githubusercontent.com/85507868/183286277-dea943ce-c0b7-4c4d-a125-6603d6d8c758.png');
  background-size: cover;
  background-position: 0;
  border-radius: 3rem;
  z-index: 20;

  ${({ theme, modalType }) => css`
    height: ${modalType === 'big' ? '52rem' : '25rem'};
    box-shadow: ${theme.boxShadow.modal};
  `}
`;

const ModalTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  height: max-content;
  font-size: 3rem;
  font-weight: 600;
  line-height: 36.31px;
  color: #ffffff;
`;

const ModalContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  font-weight: 600;
  line-height: 2.42rem;
`;

// Flex

const FlexColumnCenterCenterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export interface IFlexProps {
  justifyContent?: CSSObject['justifyContent'];
  alignItems?: CSSObject['alignItems'];
}

const FlexRowstyled = styled.div<IFlexProps>`
  display: flex;
  ${({ justifyContent, alignItems }) =>
    css`
      justify-content: ${justifyContent || 'baseline'};
      align-items: ${alignItems || 'baseline'};
    `}
`;

export interface ITypograpyProps {
  size?: CSSObject['fontSize'];
  lineHeight?: CSSObject['lineHeight'];
  margin?: CSSObject['margin'];
  padding?: CSSObject['padding'];
  paddingTop?: CSSObject['paddingTop'];
  color?: keyof DefaultTheme['color'];
  weight?: CSSObject['fontWeight'];
  textAlign?: CSSObject['textAlign'];
}

const Typograpy = styled.div<ITypograpyProps>`
  ${(props) => css`
    margin: ${props.margin || '0px'};
    padding: ${props.padding || '0px'};
    color: ${props.color || props.theme.color.black};
    font-size: ${props.size || '1.5rem'};
    font-weight: ${props.weight || '400'};
    line-height: ${props.lineHeight || '1.815rem'};
    text-align: ${props.textAlign || 'left'};
  `}
`;

export {
  ModalBackground,
  ModalStyled,
  ModalTitleStyled,
  ModalContentStyled,
  FlexRowstyled,
  FlexColumnCenterCenterStyled,
  Typograpy,
};
