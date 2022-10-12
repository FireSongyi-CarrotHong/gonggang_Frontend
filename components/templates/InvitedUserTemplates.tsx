import * as React from 'react';
import styled from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';
import SubmittedInput from '../atoms/SubmittedInput';
import TextBtn from '../atoms/TextBtn';
import BackgroundTemplates from './BackgroundTemplates';

export interface InvitedUserInfoProps extends BaseLayoutProps {
	userName: string;
	count: number;
	roomName: string;
}

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

export default function InvitedUserTemplates({ userName, count, roomName, ...rest }: InvitedUserInfoProps) {
	return (
		<BackgroundTemplates bgType='galaxyBg' modal {...rest}>
			<InvitationLetter>반갑습니다!
				<InvitedUser> {userName}</InvitedUser> 님<br />
				초대된 약속에 함께하실 건가요?
				<PersonnelWrapper>
					<PersonnelCount>초대된 약속</PersonnelCount>
					<PersonnelCount>인원수 {count} / 10</PersonnelCount>
				</PersonnelWrapper>
			</InvitationLetter>
			<SubmittedInput>{roomName}</SubmittedInput>
			<TextBtnWrapper>
				<TextBtn btnType='bigDark' active>참여하기</TextBtn>
			</TextBtnWrapper>
		</BackgroundTemplates>
	)
}