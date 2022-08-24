import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ColorBtnProps } from '../../../components/atoms/ColorBtn';
import GetUserInfoTemplates from '../../../components/templates/GetUserInfoTemplates';
import apiClient from '../../../libs/apis/apiClient';

function Roomcheck() {
	const router = useRouter();
	const { id } = router.query;
	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

	const [userColor, setUserColor] = useState<ColorBtnProps['colorName']>();
	const [roomName, setRoomName] = useState<string>('');

	// 스케쥴 이름, 나의 색상 불러오기 API
	useEffect(() => {
		const getUserInfo = async () => {
			try {
				if (typeof token === 'string') {
					const res = await apiClient.get(`/users`,
						{
							headers: { 'Content-Type': 'application/json', token }
						}
					);

					setUserColor(res.data.theme_color);

					if (res.status !== 200) throw new Error('Get UserInfo failed');
				}
			}
			catch (err: any) {
				throw new Error(err.message);
			}
		}

		const getRoomName = async () => {
			try {
				if (id) {
					const res = await apiClient.get(`/rooms/${id}`);

					setRoomName(res.data.roomname);

					if (res.status !== 200) throw new Error('Get UserInfo failed');
				}
			}
			catch (err: any) {
				throw new Error(err.message);
			}
		}

		getUserInfo();
		getRoomName();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])


	return (
		userColor &&
		<GetUserInfoTemplates roomType="open" roomName={roomName} colorName={userColor} />
	)
}

export default Roomcheck