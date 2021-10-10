import "../styles/globals.scss";
import "../styles/base.scss";
import { ReactElement } from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { AppPropsWithLayout } from "src/types/pages";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <Head>
        <title>Liam Nguyen - Full Stack Developer</title>
      </Head>
      <ThemeProvider defaultTheme="light" themes={["light", "dark"]}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
export default MyApp;
