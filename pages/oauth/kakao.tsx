import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function kakao() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const code = new URL(window.location.href).searchParams.get('code');

		if (code) {
			const sendCode = async (code) => {
				await axios.get(`http://localhost:8000/users/login?code=${code}`, {
					headers: { 'Content-Type': 'application/json' }
				}).then(res => {
					console.log(res);
					if (!res.data.token) return;
					localStorage.setItem('token', res.data.token);
					router.push("/mylogin/test");
				})
			}
			sendCode(code);
		}
	}, [])
}

export default kakao