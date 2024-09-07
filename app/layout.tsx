import type { Metadata } from "next";
import { SITE } from "lib/constants";
import { ContextProvider } from "lib/context";
import AppKitProvider from "@/app/providers";

import "lib/globals.css";

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
      <body>
        <ContextProvider>
          <AppKitProvider>{children}</AppKitProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
