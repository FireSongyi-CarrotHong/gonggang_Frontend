import * as React from 'react';
// import styled from 'styled-components';

export interface CheckBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isClicked: boolean;
}

export default function CheckBtn({ isClicked }: CheckBtnProps) {
  return isClicked ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="white"
        stroke="#6667AB"
        strokeWidth="2"
      />
      <path
        d="M4.5 9.5L10 14L12.75 10.5L15.5 7"
        stroke="#6667AB"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="white"
        stroke="#6667AB"
        strokeWidth="2"
      />
    </svg>
  );
}
