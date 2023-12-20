import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Locked In 🔒",
  description: "An app to track how long you stay locked in.",
  icons: [{ rel: "icon", url: "./favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
          <SpeedInsights />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
