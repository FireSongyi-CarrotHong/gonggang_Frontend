/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from 'react';
import styled from 'styled-components';
import CheckBtn from '../atoms/CheckBtn';
import {
  FlexColumnCenterCenterStyled,
  FlexRowstyled,
  ModalContentStyled,
  ModalTitleStyled,
  Typograpy,
} from '../atoms/CommonStyled';

import TextBtn from '../atoms/TextBtn';
import ModalSmall from '../moleculses/ModalSmall';
import TutorialContent from './TutorialContent';

const ModalSmallStyled = styled(ModalSmall)`
  font-size: 1.5rem;
  padding: 2.2rem;
`;

export default function Tutorial() {
  const [openTutorial, setOpenTutorial] = useState<boolean>(false);
  const [checkCookie, setCheckCookie] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setOpen(false);
    setOpenTutorial(true);
  };

  const handleCheck = () => {
    setCheckCookie((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ModalSmallStyled active={open}>
        <ModalTitleStyled>반갑습니다!</ModalTitleStyled>
        <ModalContentStyled>
          <FlexColumnCenterCenterStyled>
            <Typograpy
              color="white"
              size="2rem"
              lineHeight="2.42rem"
              margin="2rem 0 1.5rem 0"
            >
              공강찾기 사용법을 보시겠습니까?
            </Typograpy>
            <TextBtn btnType="small" active onClick={handleOpen}>
              보러가기
            </TextBtn>
          </FlexColumnCenterCenterStyled>
          <FlexRowstyled justifyContent="space-between" alignItems="center">
            <FlexRowstyled alignItems="center" onClick={handleCheck}>
              <CheckBtn isClicked={checkCookie} />
              <Typograpy color="white" margin="0 0 0 0.5rem">
                3일동안 보지 않기
              </Typograpy>
            </FlexRowstyled>
            <button type="button">
              <Typograpy color="white" onClick={handleClose}>
                닫기
              </Typograpy>
            </button>
          </FlexRowstyled>
        </ModalContentStyled>
      </ModalSmallStyled>
      <TutorialContent openTutorial={openTutorial} />
    </div>
  );
}
