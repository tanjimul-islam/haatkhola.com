import { Noto_Sans_Bengali } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Script from "next/script";
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "HaatKhola - হাটখোলা",
  description: "Your Trusted E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoSansBengali.className}>
      <body className={`antialiased `}>{children}</body>
    </html>
  );
}
