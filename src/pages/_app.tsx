/* eslint-disable import/no-unresolved */
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, Next and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
