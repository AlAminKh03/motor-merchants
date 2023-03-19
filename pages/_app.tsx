import { Toaster } from "react-hot-toast";
import AuthProvider from "../Components/Contexts/AuthProvider";
import Navbar from "../Components/Shared/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PT_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../Components/Shared/Footer";

const PT = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${PT.className} bg-white`}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Toaster />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}
