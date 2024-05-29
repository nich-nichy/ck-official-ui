// app/layout.js (or app/layout.tsx if you're using TypeScript)
import React from "react";
import Providers from "../redux/Provider";
import "./globals.css";

export const metadata = {
  title: "Cringe Kadai",
  description: "Ok to be a cringe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
