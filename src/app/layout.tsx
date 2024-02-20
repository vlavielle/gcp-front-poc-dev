import type { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Template",
  description: "Next Template Application",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${fonts.barlow.variable} global-layout `}>
        <Providers>
          {children} 
        </Providers>
      </body>
    </html>
  );
}
