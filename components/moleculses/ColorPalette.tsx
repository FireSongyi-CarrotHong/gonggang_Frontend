import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ThemeColor, { ThemeColorProps } from '../atoms/ThemeColor';

const ColorWrapper = styled.div`
    width: 370px;
	display: flex;
	flex-wrap: wrap;
	gap : 30px;
`

export default function ColorPalette() {
	const [clicked, setClicked] = useState(false);

	const colorPalette: ThemeColorProps['color'][] = ['yellow', 'orange', 'pink', 'hotPink', 'lightRed', 'lightGreen', 'green', 'sky', 'blue', 'purple'];

	const clickColorBtn = () => {
		// eslint-disable-next-line no-unused-expressions
		clicked ? setClicked(false) : setClicked(true);
	}

	return (
		<ColorWrapper>
			{colorPalette.map(color => <ThemeColor key={color} onClick={clickColorBtn} clicked={clicked} color={color} />)}
		</ColorWrapper>
	)

}