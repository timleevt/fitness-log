import "../styles/globals.css";
import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
