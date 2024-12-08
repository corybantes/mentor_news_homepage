import type { Metadata } from "next";
import { inter } from "../../public/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newsletter Homepage",
  description: "Newsletter Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased bg-neutral-off_white`}>
        {children}
      </body>
    </html>
  );
}
