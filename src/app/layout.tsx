import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Topics",
  description: "Topics That I Can Teach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
