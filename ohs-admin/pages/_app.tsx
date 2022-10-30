import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import withCredential from "../lib/auth/withCredential";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const eventSource = new EventSource("http://localhost:4000/emergency/sse");

    eventSource.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      alert(`"${msg.name}"에서 긴급요청!!!`);
    };

    return () => eventSource.close();
  }, []);
  return (
    <Provider store={store}>
      <Head>
        <title>오행시 관리자</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withCredential(MyApp);
