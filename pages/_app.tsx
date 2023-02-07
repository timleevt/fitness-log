import "../styles/globals.css";
import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const openSans = Open_Sans({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </main>
  );
}
