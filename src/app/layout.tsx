import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalStateProvider} from './context/GlobalStateContext'; // Adjust the path based on your project structure

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diabetes 360",
  description: "Diabetes360: Comprehensive Diabetes Management Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <GlobalStateProvider>
        {children}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
