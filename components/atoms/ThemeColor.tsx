import * as React from 'react';
import { useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export interface ThemeColorProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: keyof DefaultTheme['themeColor'];
}

interface ColorBtnProps extends ThemeColorProps {
	isClicked: boolean;
}

const ColorBtn = styled.button<ColorBtnProps>`
	${({ theme, color, isClicked }) => css`
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: ${theme.themeColor[color]};
		box-shadow: ${isClicked ? `inset 1.5px 1.5px 10px #424242` : ''};

		&:hover {
			transform: scale(1.1);
		}
	`}
`

export default function ThemeColor(props: ThemeColorProps) {
	const [isClicked, setIsClicked] = useState(false);

	const clickColorBtn = () => {
		// eslint-disable-next-line no-unused-expressions
		isClicked ? setIsClicked(false) : setIsClicked(true)
	}

	return <ColorBtn {...props} onClick={clickColorBtn} isClicked={isClicked} />
}