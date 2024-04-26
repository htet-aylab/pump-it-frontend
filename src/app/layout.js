import localFont from 'next/font/local'
import '@fontsource/irish-grover';
import "./globals.css";
import { Providers } from "./providers";

const irishGrover = localFont({ src: '../../public/assets/fonts/irish-grover-latin-400-normal.woff2' })

export const metadata = {
  title: "Pump it!!!",
  description: "NFT mint engine for pumpers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={irishGrover.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
