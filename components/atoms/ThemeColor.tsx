import * as React from 'react';
import { useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export interface ThemeColorProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: keyof DefaultTheme['themeColor'];
}

interface ColorBtnProps extends ThemeColorProps {
	clicked: boolean;
}

const ColorBtn = styled.button<ColorBtnProps>`
	${({ theme, color, clicked }) => css`
		width: 50px;
		height: 50px;
		background-color: ${theme.themeColor[color]};
		border-radius: 50%;
		box-shadow: ${clicked ? `inset 1.5px 1.5px 10px #424242` : ''};

		&:hover {
			transform: scale(1.1);
		}
	`}
`

export default function ThemeColor(props: ThemeColorProps) {
	const [clicked, setClicked] = useState(false);

	const clickColorBtn = () => {
		// eslint-disable-next-line no-unused-expressions
		clicked ? setClicked(false) : setClicked(true)
	}

	return <ColorBtn {...props} onClick={clickColorBtn} clicked={clicked} />
}