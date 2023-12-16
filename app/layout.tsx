import type { Metadata } from "next";
import { SITE } from "lib/constants";
import { Analytics } from "@vercel/analytics/react";

import "lib/globals.css";

import { ContextProvider } from "lib/context";

export const metadata: Metadata = {
  title: SITE.TITLE,
  description: SITE.DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <ContextProvider>
        <body>
          {children}
          <Analytics />
        </body>
      </ContextProvider>
    </html>
  );
}
