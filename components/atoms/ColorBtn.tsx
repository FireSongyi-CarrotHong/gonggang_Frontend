import * as React from 'react';
import { useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export interface ColorBtnProps extends React.InputHTMLAttributes<HTMLInputElement> {
	colorName: keyof DefaultTheme['themeColor'];
}

const ColorBtnStyle = styled.input<ColorBtnProps>`
	${({ theme, colorName }) => css`
	    appearance: none;
		width: 50px;
		height: 50px;
		margin-bottom: 7px;
		border-radius: 50%;
		background-color: ${theme.themeColor[colorName]};
		box-shadow:0px 4px 4px rgba(0, 0, 0, 0.5);

		&:hover {
			transform: scale(1.1);
		}

		&:checked {
			box-shadow: inset 1.5px 1.5px 10px #424242;
		}
	`}
`

export default function ColorBtn({ colorName, ...props }: ColorBtnProps) {
	const [clickedColor, setClickedColor] = useState('왜이래');

	const clickColorBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
		setClickedColor(e.target.value);
	}

	return <ColorBtnStyle type='radio' name='colorRadioBtn' value={colorName} onChange={clickColorBtn} colorName={colorName} {...props} />
}