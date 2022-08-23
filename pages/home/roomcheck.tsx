import * as React from 'react';
import { useState, useEffect } from 'react';
import { ColorBtnProps } from '../../components/atoms/ColorBtn';
import GetUserInfoTemplates from '../../components/templates/GetUserInfoTemplates';
import apiClient from '../../libs/apis/apiClient';

function roomcheck() {
	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [userColor, setUserColor] = useState<ColorBtnProps['colorName']>();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const getUserInfo = async () => {
			try {
				if (typeof token === 'string') {
					const res = await apiClient.get(`/users`, { headers: { 'Content-Type': 'application/json', token } });

					setUserColor(res.data.theme_color);
					console.log(res.data);

					if (res.status !== 200) throw new Error('Get UserInfo failed');
				}
			}
			catch (err: any) {
				throw new Error(err.message);
			}
		}

		getUserInfo();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		userColor &&
		<GetUserInfoTemplates roomType="open" roomName='끝내주게 멋진 조별과제' colorName={userColor} />
	)
}

export default roomcheck