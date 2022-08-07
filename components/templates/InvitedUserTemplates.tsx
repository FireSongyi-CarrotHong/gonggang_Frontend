import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import whaleIcon from '../../pages/images/whale_icon.png';
import Logo from '../atoms/Logo';
import { BaseLayoutProps } from '../../shared/const';
import SubmittedInput from '../atoms/SubmittedInput';
import TextBtn from '../atoms/TextBtn';

export interface InvitedUserInfoProps extends BaseLayoutProps {
	userName: string;
	count: number;
	roomName: string;
}

const OpenContainer = styled.main`
    position: relative;
	width: 480px;
	height: 100vh;
	background-image: url('/room_open_2.jpeg');
	background-size : cover;
	background-position : center;
	mix-blend-mode: normal;
`

const Background = styled.div`
    width: 442px;
	height: 542px;
	position: absolute;
	top:180px;
	left: 19px;
	background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

const WaleIconWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`

const ContentContainer = styled.div`
	display	: flex;
	flex-direction: column;
	align-items: center;
`

const InvitationLetter = styled.span`
	margin: 60px 0 10px 0;
	font-weight: 600;
	font-size: 30px;
	line-height: 42px;
	color: #ffffff;
`

const InvitedUser = styled(InvitationLetter)`
	color : #B388FF;
`

const PersonnelWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top:70px;
`

const PersonnelCount = styled.div`
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;	
	color:${({ theme }) => theme.color.gray100};
`

const TextBtnWrapper = styled.div`
margin-top: 120px;
`

export default function InvitedUserTemplates(props: InvitedUserInfoProps) {
	return (
		<OpenContainer {...props}>
			<Logo logoTheme='white' />
			<WaleIconWrapper>
				<Image src={whaleIcon} alt="공강 고래 아이콘" width={215} height={105} style={{ transform: `rotate(-15deg)` }} />
			</WaleIconWrapper>
			<Background>
				<ContentContainer>
					<InvitationLetter>반갑습니다!
						<InvitedUser> 박송이</InvitedUser> 님<br />
						초대된 약속에 함께하실 건가요?
						<PersonnelWrapper>
							<PersonnelCount>초대된 약속</PersonnelCount>
							<PersonnelCount>인원수 2 / 10</PersonnelCount>
						</PersonnelWrapper>
					</InvitationLetter>
					<SubmittedInput>끝내주게 멋진 조별발표 과제</SubmittedInput>
					<TextBtnWrapper>
						<TextBtn btnType='bigDark' active>참여하기</TextBtn>
					</TextBtnWrapper>
				</ContentContainer>
			</Background>
		</OpenContainer>
	)
}