import type { Metadata } from "next";

import Provider from '@/app/provider';


export const metadata: Metadata = {
  title: "EcoCoin",
  description: "Recycle your waste and get rewarded",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
