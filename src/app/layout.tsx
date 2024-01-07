import "~/styles/globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";

import { Analytics } from "@vercel/analytics/react";
import AppProviders from "~/lib/providers";
import { TRPCReactProvider } from "~/trpc/react";

// const inter = Inter({ subsets: ["latin"] });
const geist = GeistSans;

export const metadata = {
  title: "Locked-In",
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
      <body className={`${geist.className}`}>
        <AppProviders>
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
            <Analytics />
            <SpeedInsights />
          </TRPCReactProvider>
        </AppProviders>
      </body>
    </html>
  );
}
