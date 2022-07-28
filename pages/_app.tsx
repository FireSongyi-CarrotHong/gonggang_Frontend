import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import theme from '../styles/theme';
import wrapper from '../stores';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>공강찾기</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <div>동작하나?</div>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
