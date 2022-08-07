import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import kakaoLogo from '../images/kakao_login_large_wide.png';
import mainLogo from '../images/gonggang_logo.png';
import Logo from '../../components/atoms/Logo';

const EntranceContainer = styled.main`
	width: 480px;
	height: 100%;
	background-image: url('/whale.jpeg');
	background-size : cover;
	background-position : center;
	mix-blend-mode: normal;
`

const TitleLeft = styled.h1`
    padding: 220px 0 0 46px;
	font-weight: 600;
	font-size: 30px;
	line-height: 36px;
	color : ${({ theme }) => theme.color.lightYellow};
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const TitleRight = styled(TitleLeft)`
	padding: 220px 46px 200px 0;
	text-align: right;
`

const SubTitleWrapper = styled.div`
    display	: flex;
	flex-direction: column;
    align-items: center;
	margin-bottom: 100px;
`

const SubTitle = styled.h2`
    width: 387px;
	margin-bottom: 300px;
    padding: 20px 30px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
	color: ${({ theme }) => theme.color.veryPeri};
	filter: drop-shadow(0px 3px 2px rgba(186, 181, 201, 0.98));
`

const Start = styled.div`
    padding: 60px 0 20px 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
	color : white;
`

function login() {
	const restApiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
	const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`.replaceAll("'", "").replaceAll(";", "");

	return (
		<EntranceContainer>
			<Logo logoTheme='white' />
			<TitleLeft>바쁜 대학생활,<br />만날 시간 찾기<br />힘들지 않으셨나요?</TitleLeft>
			<TitleRight>클릭 한 번으로<br />만날 시간을<br />정할 수 있습니다</TitleRight>
			<SubTitleWrapper>
				<SubTitle>손쉬운 터치로 시간표 블록을 만들고<br />카톡 링크로 간편하게 공유하세요!</SubTitle>
				<Image src={mainLogo} alt="공강로고" width={180} height={180} style={{ borderRadius: 45 }} />
				<Start>지금 시작하기</Start>
				<a href={KAKAO_AUTH_URL}>
					<Image src={kakaoLogo} alt="카카오 로그인 버튼" width={300} height={45} style={{ borderRadius: 45 }} />
				</a>
			</SubTitleWrapper>
		</EntranceContainer>
	)
}

export default login