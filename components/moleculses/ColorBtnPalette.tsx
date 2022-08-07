import * as React from 'react';
import styled from 'styled-components';
import ColorBtn, { ColorBtnProps } from '../atoms/ColorBtn';

const ColorBtnWrapper = styled.div`
    width: 370px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap : 13px;
`

export default function ColorBtnPalette() {
	const colorPalette: ColorBtnProps['colorName'][] = ['yellow', 'orange', 'pink', 'hotPink', 'lightRed', 'lightGreen', 'green', 'sky', 'blue', 'purple'];

	return (
		<ColorBtnWrapper>
			{colorPalette.map(color => <ColorBtn key={color} colorName={color} />)}
		</ColorBtnWrapper>
	)
}