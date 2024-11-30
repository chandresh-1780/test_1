import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="shortcut icon" href="/wibesFav1.jpg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
