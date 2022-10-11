import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import withCredential from "../lib/auth/withCredential";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>오행시 관리자</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default withCredential(MyApp);
