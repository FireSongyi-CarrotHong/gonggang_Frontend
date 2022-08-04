import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import whaleIcon from '../images/whale_icon.png';
import Logo from '../../components/atoms/Logo';

const OpenContainer = styled.main`
	width: 480px;
	height: 100vh;
	background-image: url('/room_open_1.jpeg');
	background-size : cover;
	background-position : center;
	mix-blend-mode: normal;
`

const Background = styled.div`
    width: 395px;
	height: 625px;
	position: fixed;
	top:90px;
	left: 523px;
	background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

function open() {
	return (
		<OpenContainer>
			<Background />
			<Logo logoTheme={'white'} />
			<Image src={whaleIcon} alt="공강 고래 아이콘" width={160} height={180} style={{ transform: `rotate(-10deg)` }} />
		</OpenContainer>
	)
}

export default open