import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import withCredential from "../lib/auth/withCredential";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
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
