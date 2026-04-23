import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/layout/footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-family-roboto",
  weight: "variable",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family-inter",
  display: "swap",
});

const midnight = localFont({
  src: "../public/fonts/Midnight.ttf",
  variable: "--font-family-midnight",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lagos Blockchain Week",
  description: "Lagos Blockchain Week is a week-long event that brings together the best and brightest in the blockchain industry to discuss the latest trends and developments in the space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${inter.variable} ${midnight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
   
        {children}
        <Footer />
      </body>
    </html>
  );
}
