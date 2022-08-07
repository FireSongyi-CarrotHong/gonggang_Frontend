import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function kakao() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const code = new URL(window.location.href).searchParams.get('code');

		if (code) {
			const sendCode = async (authorizedCode: string) => {
				await axios.get(`http://localhost:8000/users/login?code=${authorizedCode}`, {
					headers: { 'Content-Type': 'application/json' }
				}).then(res => {
					if (!res.data.token) return;
					localStorage.setItem('token', res.data.token);
					router.push("/home/roomopen");
				})
			}
			sendCode(code);
		}
	}, [])
}

export default kakao