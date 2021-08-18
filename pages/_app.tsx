import "../styles/globals.css";
import { FC, ReactElement, ReactNode } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";

type NextPageWithLayout = {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
