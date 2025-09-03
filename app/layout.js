import { Roboto } from "next/font/google";
import NavigationBar from "../components/navigationBar";
import Profiles from "../components/profiles";

import "./globals.css";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

const DEFAULT_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.GITHUB_URL
  ? `https://${process.env.NEXT_PUBLIC_GITHUB_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: "Eric Zou",
  description: "My Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <NavigationBar />
        <div className="flex-grow flex flex-col items-center justify-center">
          {children}
        </div>
        <Profiles />
      </body>
    </html>
  );
}
