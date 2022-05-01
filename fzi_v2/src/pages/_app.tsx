/* eslint-disable prettier/prettier */
import "../styles/global.css";

import { AppProps } from "next/app";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
