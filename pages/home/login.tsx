import * as React from 'react';
// import styled from 'styled-components';
import Image from 'next/image';
import kakaoLogo from '../images/kakao_login_medium_wide.png';

function login() {
	const restApiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
	const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;

	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${restApiKey}&redirect_uri=${redirectUri}&response_type=code`.replaceAll("'", "").replaceAll(";", "");

	return (
		<a href={KAKAO_AUTH_URL}>
			<Image src={kakaoLogo} alt="카카오 로그인 버튼" width={200} height={30} />
		</a>
	)
}

export default login