import * as React from "react";
import { hotjar } from "react-hotjar";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import createEmotionCache from "@/styles/createEmotionCache";
import { createTheme } from "@/styles/theme";
import { ColorModeContext } from "@/contexts/ColorMode";
import Script from "next/script";
import { SnackbarProvider } from "@/components";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const initializeContentful = async () => {
  // const {fields} = await getEntry({
  //   id: "[ENTER_ENTRY_ID_TO_FETCH_JSON_FROM_CONTENTFUL]"
  // });
  // console.log(fields);
};

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider);
}

const initializeHotjar = () => {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_HOTJAR_ID &&
    process.env.NEXT_PUBLIC_HOTJAR_SITE_ID
  ) {
    hotjar.initialize(
      parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID),
      parseInt(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID)
    );
  }
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(mode), [mode]);

  React.useEffect(initializeHotjar, []);
  React.useEffect(() => {
    initializeContentful();
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA_TRACKING_ID}', { 
                page_path: window.location.pathname,
            });
        `,
          }}
        />
      </Head>
      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
      />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <SnackbarProvider>
              <Component {...pageProps} />
            </SnackbarProvider>
          </Web3ReactProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
