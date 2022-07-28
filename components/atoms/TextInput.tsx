import * as React from 'react';
import styled, { css } from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseLayoutProps {
	duplicate: boolean;
	scheduleName?: string;
}

const TextInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const TextInputStyle = styled.input`
	${({ theme }) => css`
	    width: 350px;
	    height: 70px;
		padding: 0 30px;
		background-color: ${theme.color.gray100};
		border-radius: 10px;
		font-size: 18px;

		&::placeholder {
		color : ${theme.color.gray500};
		}
	`
	}
`

const TextLimitStyle = styled.div`
		${({ theme }) => css`
		margin: 10px 0;
		font-size: 15px;
		text-align: center;
		color : ${theme.color.red}
		`
	}
`

export default function TextInput({ duplicate, scheduleName, ...rest }: TextInputProps) {
	return (
		<TextInputWrapper>
			<TextInputStyle type="text" maxLength="15" placeholder={scheduleName ? `${scheduleName}` : `스케줄 이름을 입력해주세요`}{...rest} />
			<TextLimitStyle>{duplicate ? `중복된 스케줄 이름입니다.` : `최대 글자 수는 15자 이내입니다.`}</TextLimitStyle>
		</TextInputWrapper>
	)
}