import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';
import TextInput from '../atoms/TextInput';
import TextBtn from '../atoms/TextBtn';
import ColorBtnPalette from '../moleculses/ColorBtnPalette';
import BackgroundTemplates from './BackgroundTemplates';

export interface InfoInputProps extends BaseLayoutProps {
	InfoInputType: 'roomName' | 'themeColor'
}

interface roomNameStyleProps {
	colorPage: boolean
}

const ProgressText = styled.div`
	padding: 0 15px 15px 0;
	font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color : ${({ theme }) => theme.color.gray300};
`

const ProgressBg = styled.div`
    position: relative;
	width: 300px;
	height: 5px;
	background: white;
`

const ProgrssBar = styled.div<roomNameStyleProps>`
    position: absolute;
    width: ${({ colorPage }) => colorPage ? `300px` : `150px`};
	height: 5px;
	background: ${({ theme }) => theme.color.veryPeri};
`

const Title = styled.p`
	margin: 27px 0 60px 0;
	font-weight: 600;
	font-size: 30px;
	line-height: 36px;
	color: white;
`

const ChangeRoomName = styled.div`
	margin-bottom: 10px;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: -0.03em;
	color: ${({ theme }) => theme.color.gray300};
`

const TextBtnWrapper = styled.div`
	margin: 90px 0 55px 0;
	display: flex;
	gap: 100px;
`

export default function CreateUserInfoTemplates({ InfoInputType, ...rest }: InfoInputProps) {
	const { children: roomName } = rest;

	const [duplicate, setDuplicate] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [colorPage, setColorPage] = useState(false);

	const checkDuplicate = () => {
		// eslint-disable-next-line no-unused-expressions
		// duplicate ? setDuplicate(false) : setDuplicate(true);
		setColorPage(true);
	}

	const checkValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	}

	const goToBack = () => {
		setColorPage(false);
	}

	const postUserInfo = () => {
		alert('유저 정보 전송');
	}

	return (
		<BackgroundTemplates bgType='cloudBg' modal>
			<ProgressText>
				진행도 {(InfoInputType === 'roomName' && !colorPage) ? 1 : 2} / 2
			</ProgressText>
			<ProgressBg >
				<ProgrssBar colorPage={colorPage} />
			</ProgressBg>

			<Title>{colorPage ? `나를 표현하는 색은?` : `무슨 약속인가요?`}</Title>
			{colorPage ? (
				<>
					<ColorBtnPalette />
					<TextBtnWrapper>
						<TextBtn btnType='small' active onClick={goToBack}>이전</TextBtn>
						<TextBtn btnType='small' active onClick={postUserInfo}>다음</TextBtn>
					</TextBtnWrapper>
				</>
			) : (
				<>
					<ChangeRoomName>스케줄 이름은 언제든 수정할 수 있습니다.</ChangeRoomName>
					<TextInput duplicate={duplicate} onChange={checkValue} />
					<TextBtnWrapper>
						<TextBtn btnType='small' active={false}>이전</TextBtn>
						<TextBtn btnType='small' active onClick={checkDuplicate}>다음</TextBtn>
					</TextBtnWrapper>
				</>)}
		</BackgroundTemplates>

	)
}