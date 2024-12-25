import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const fontJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});



export const metadata: Metadata = {
  title: "Pulse",
  description: "Healthcare for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontJakartaSans.className} fontJakartaSans min-h-screen bg-dark-300  antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
