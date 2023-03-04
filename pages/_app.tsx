import Navbar from "../Components/Shared/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PT_Sans } from "next/font/google";

const PT = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${PT.className} mx-0 md:mx-[200px]`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
