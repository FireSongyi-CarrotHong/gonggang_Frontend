// import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function OAuth() {
	const router = useRouter();
	const code = new URL(window.location.href).searchParams.get('code');

	console.log("너는 인가코드", code);

	useEffect(() => {
		if (code) {
			const sendCode = async (code: any) => {
				await axios.post("http://localhost:8000/users/login", {
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ code }),
				}).then(res => {
					console.log(res);
					if (!res.data.token) return;
					localStorage.setItem('token', res.data.token);
					router.push("/test");
				})
			}
			sendCode(code);
		}
	}, [code])
}

export default OAuth;