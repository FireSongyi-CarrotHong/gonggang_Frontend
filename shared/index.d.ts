declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare global {
	interface window {
		kakao: any;
	}
	const kakao: any;
}