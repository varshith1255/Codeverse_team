import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <RecoilRoot>
  <Head>
        <title>Codeverse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
  </RecoilRoot>
  );
}