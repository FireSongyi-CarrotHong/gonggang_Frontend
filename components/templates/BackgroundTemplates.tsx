import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import whaleIcon from '../../pages/images/whale_icon.png';
import Logo from '../atoms/Logo';
import { BaseLayoutProps } from '../../shared/const';

export interface BackgroundProps extends BaseLayoutProps {
	bgType: 'cloudBg' | 'galaxyBg',
	modal: boolean
}

interface BgStyleProps extends BackgroundProps {
	imgNum: Number
}

const OpenContainer = styled.main<BgStyleProps>`
    position: relative;
	width: 480px;
	height: 100vh;
	background-image: ${({ imgNum }) => `url('/room_open_${imgNum}.jpeg')`};
	background-size : cover;
	background-position : center;
	mix-blend-mode: normal;
`

const Background = styled.div`
    width: 395px;
	height: 625px;
	position: absolute;
	top:90px;
	left: 43px;
	background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

const BackgroundInvite = styled(Background)`
	width: 442px;
	height: 542px;
	top:180px;
	left: 19px;
`

const ContentContainer = styled.div`
	display	: flex;
	flex-direction: column;
	align-items: center;
`

const WaleIconWrapperCenter = styled.div`
	margin: 30px 0 10px 0;
`

const WaleIconWrapperRight = styled.div`
	display: flex;
	justify-content: flex-end;
`

export default function BackgroundTemplates({ bgType, modal, ...rest }: BackgroundProps) {
	return (
		bgType === 'cloudBg'
			? (<OpenContainer {...rest} imgNum={1}>
				<Logo logoTheme='white' />
				<Background>
					<ContentContainer>
						<WaleIconWrapperCenter>
							<Image src={whaleIcon} alt="공강 고래 아이콘" width={160} height={80} style={{ transform: `rotate(-10deg)` }} />
						</WaleIconWrapperCenter>
						{rest.children}
					</ContentContainer>
				</Background>
			</OpenContainer>)
			: (
				<OpenContainer {...rest} imgNum={2}>
					<Logo logoTheme='white' />
					{modal
						? (
							<>
								<WaleIconWrapperRight>
									<Image src={whaleIcon} alt="공강 고래 아이콘" width={215} height={105} style={{ transform: `rotate(-15deg)` }} />
								</WaleIconWrapperRight>
								<BackgroundInvite>
									<ContentContainer>
										{rest.children}
									</ContentContainer>
								</BackgroundInvite>
							</>
						) : (
							<ContentContainer>
								{rest.children}
							</ContentContainer>
						)}
				</OpenContainer>
			)
	)
}