import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';
import SubmittedInput from '../atoms/SubmittedInput';
import TextBtn from '../atoms/TextBtn';
import BackgroundTemplates from './BackgroundTemplates';

export interface GetUserInfoProps extends BaseLayoutProps {
	roomType: 'open' | 'entrance';
	roomName: string;
	colorName: keyof DefaultTheme['themeColor'];
}

type GetUserInfoStyleProps = Pick<GetUserInfoProps, 'colorName'>;

const ContentWrapper = styled.div`
	width: 400px;
`

const CheckContent = styled.p`
	margin: 100px 0 70px 0;
	font-weight: 600;
	font-size: 30px;
	line-height: 36px;
	color : #ffffff;
`

const CheckTitle = styled.div`
	align-self: flex-start;
	margin: 36px 0 20px 0;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color:${({ theme }) => theme.color.gray100};
`

const CheckThemeColor = styled.div<GetUserInfoStyleProps>`
	margin-bottom: 80px;
	width: 50px;
	height: 50px;
	background-color: ${({ theme, colorName }) => theme.themeColor[colorName]};
	border-radius: 50%;
`

const TextBtnWrapper = styled.div`
	padding-bottom: 20px;
`

export default function GetUserInfoTemplates({ roomType, roomName, colorName, ...rest }: GetUserInfoProps) {
	return (
		<BackgroundTemplates bgType='galaxyBg' modal={false} {...rest}>
			<ContentWrapper>
				<CheckContent>입력하신 내용을 확인해주세요!</CheckContent>
				<CheckTitle>스케줄 이름</CheckTitle>
				<SubmittedInput>{roomName}</SubmittedInput>
				<CheckTitle>나의 색상</CheckTitle>
				<CheckThemeColor colorName={colorName} />
				{roomType === 'open' ?
					(<>
						<TextBtnWrapper>
							<TextBtn btnType='bigLight' active={false}>수정하기</TextBtn>
						</TextBtnWrapper>
						<TextBtn btnType='bigDark' active>방 만들기</TextBtn>
					</>)
					: <TextBtn btnType='bigDark' active>방 입장하기</TextBtn>
				}
			</ContentWrapper>
		</BackgroundTemplates>
	)
}