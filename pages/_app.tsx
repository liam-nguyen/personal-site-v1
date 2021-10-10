import "../styles/globals.scss";
import { ReactElement } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { NextPageWithLayout } from "../src/interfaces";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(
    <>
      <Head>
        <title>Liam Nguyen - Full Stack Developer</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
