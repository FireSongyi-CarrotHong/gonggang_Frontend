import * as React from 'react';
import styled, { css } from 'styled-components';
import { BaseLayoutProps } from '../../shared/const';

export interface SubmittedInputProps extends BaseLayoutProps { }

const SubmittedInputStyle = styled.div`
	${({ theme }) => css`
	    width: 400px;
	    height: 70px;
		padding: 25px 30px;
		background-color: ${theme.color.gray100};
		border-radius: 10px;
		font-size: 18px;
		text-align: center;
	`
	}
`

export default function SubmittedInput(props: SubmittedInputProps) {
	const { children: scheduleName } = props;

	return (
		<SubmittedInputStyle>{scheduleName}</SubmittedInputStyle>
	)
}