import ParamsContextProvider from "@/Components/Context";
import { Layout } from "@/Components/Layout";
import "@/styles/globals.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParamsContextProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ParamsContextProvider>
  )
}
