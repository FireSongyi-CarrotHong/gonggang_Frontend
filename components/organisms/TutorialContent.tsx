import { useState } from 'react';
import styled from 'styled-components';
import { Typograpy } from '../atoms/CommonStyled';
import ModalBig from '../moleculses/ModalBig';

const FakeImageBoxStyled = styled.div`
  width: 100%;
  height: 19.4rem;
  background-color: silver;
`;

export default function TutorialContent({
  openTutorial,
}: {
  openTutorial: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(true);

  const tutorialList = [
    {
      title: '스케줄 생성',
      contentComponent: (
        <>
          <FakeImageBoxStyled> whiteBox</FakeImageBoxStyled>
          <Typograpy
            weight="600"
            color="white"
            size="1.8rem"
            lineHeight="2.2rem"
            margin="4rem 0 3rem 0 "
            textAlign="center"
          >
            + 버튼으로 스케줄을 생성할 수 있습니다. <br /> 스케줄의 시작 시간과
            완료 시간을 클릭하면
            <br /> 나만의 컬러로 스케줄 칸이 채워집니다.
          </Typograpy>
        </>
      ),
      leftBtnActive: false,
      rightBtnActive: true,
      leftBtnTex: '이전',
      rightBtnText: '다음',
      leftClick: () => {},
      rightClick: () => setIndex((prev) => prev + 1),
    },
    {
      title: '스케줄 저장과 수정',
      contentComponent: (
        <>
          <FakeImageBoxStyled> whiteBox</FakeImageBoxStyled>
          <Typograpy
            weight="600"
            color="white"
            size="1.8rem"
            lineHeight="2.2rem"
            margin="4rem 0 3rem 0"
            textAlign="center"
          >
            스케줄을 다 채우셨다면
            <br />
            스케줄 저장버튼을 눌러주세요.
            <br />
            수정하기 버튼을 이용해 언제든
            <br />
            수정할 수 있습니다.
          </Typograpy>
        </>
      ),
      leftBtnActive: true,
      rightBtnActive: true,
      leftBtnTex: '이전',
      rightBtnText: '다음',
      leftClick: () => setIndex((prev) => prev - 1),
      rightClick: () => setIndex((prev) => prev + 1),
    },
    {
      title: '스케줄 공유',
      contentComponent: (
        <>
          <FakeImageBoxStyled> whiteBox</FakeImageBoxStyled>
          <Typograpy
            weight="600"
            color="white"
            size="1.8rem"
            lineHeight="2.2rem"
            margin="4rem 0 3rem 0"
            textAlign="center"
          >
            완성된 스케줄을 다른 사람과 공유해보세요! <br />
            (다른 참여자 이름을 클릭하여
            <br /> 스케줄을 골라볼 수 있습니다.)
          </Typograpy>
        </>
      ),
      leftBtnActive: true,
      rightBtnActive: true,
      leftBtnTex: '이전',
      rightBtnText: '다음',
      leftClick: () => setIndex((prev) => prev - 1),
      rightClick: () => setIndex((prev) => prev + 1),
    },
    {
      title: '준비완료!',
      contentComponent: (
        <>
          <FakeImageBoxStyled> whiteBox</FakeImageBoxStyled>
          <Typograpy
            weight="600"
            color="white"
            size="1.8rem"
            lineHeight="2.2rem"
            margin="4rem 0 3rem 0"
            textAlign="center"
          >
            공강찾기 버튼을 클릭하면 <br />
            만날 스케줄을 확인할 수 있습니다.
          </Typograpy>
        </>
      ),
      leftBtnActive: true,
      rightBtnActive: true,
      leftBtnTex: '이전',
      rightBtnText: '시작하기',
      leftClick: () => setIndex((prev) => prev - 1),
      rightClick: () => setOpenModal(false),
    },
  ];

  return (
    <ModalBig
      active={openModal && openTutorial}
      title={tutorialList[index].title}
      contentComponent={tutorialList[index].contentComponent}
      leftBtnActive={tutorialList[index].leftBtnActive}
      rightBtnActive={tutorialList[index].rightBtnActive}
      leftBtnText={tutorialList[index].leftBtnTex}
      rightBtnText={tutorialList[index].rightBtnText}
      leftClick={tutorialList[index].leftClick}
      rightClick={tutorialList[index].rightClick}
    />
  );
}
