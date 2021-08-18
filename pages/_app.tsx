import "../styles/globals.css";
import { ReactElement } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { NextPageWithLayout } from "../src/interfaces";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
