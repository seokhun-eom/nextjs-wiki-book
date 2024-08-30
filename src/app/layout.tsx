import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Provider from "./Provider";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "C2C 커머스",
  description: "C2C 커머스 with Next.js",
  openGraph: {
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Provider>{children}</Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
