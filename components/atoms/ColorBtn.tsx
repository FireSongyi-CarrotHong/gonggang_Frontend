import * as React from 'react';
import { useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export interface ColorBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: keyof DefaultTheme['themeColor'];
}

interface ColorBtnStyleProps extends ColorBtnProps {
	isClicked: boolean;
}

const ColorBtnStyle = styled.button<ColorBtnStyleProps>`
	${({ theme, color, isClicked }) => css`
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: ${theme.themeColor[color]};
		box-shadow: ${isClicked ? `inset 1.5px 1.5px 10px #424242` : '0px 4px 4px rgba(0, 0, 0, 0.5)'};

		&:hover {
			transform: scale(1.1);
		}
	`}
`

export default function ColorBtn(props: ColorBtnProps) {
	const [isClicked, setIsClicked] = useState(false);

	const clickColorBtn = () => {
		// eslint-disable-next-line no-unused-expressions
		isClicked ? setIsClicked(false) : setIsClicked(true)
	}

	return <ColorBtnStyle {...props} onClick={clickColorBtn} isClicked={isClicked} />
}