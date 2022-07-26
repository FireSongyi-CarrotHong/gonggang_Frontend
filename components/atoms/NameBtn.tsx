import * as React from 'react';
import { useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { BaseProps } from '../../shared/const';

export interface NameBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {
	color: keyof DefaultTheme['themeColor'];
}

interface NameButtonProps extends NameBtnProps {
	isClicked: boolean;
}

const NameButton = styled.button<NameButtonProps>`
	${({ theme, color, isClicked }) => css`
        height: 25px;
		padding : 5px 7px;
        border-radius: 12px;
		background-color : ${isClicked ? theme.themeColor[color] : theme.color.gray300};
		font-size: 12px;
		color: ${isClicked ? theme.color.black : theme.color.gray}
		`
	}
`

export default function NameBtn(props: NameBtnProps) {
	const { children: name } = props;
	const [isClicked, setIsClicked] = useState(false);

	const clickNameBtn = () => {
		// eslint-disable-next-line no-unused-expressions
		isClicked ? setIsClicked(false) : setIsClicked(true)
	}

	return (<NameButton {...props} onClick={clickNameBtn} isClicked={isClicked}>{name}</NameButton>)
}