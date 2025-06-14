import "~/styles/globals.css";

import { type Metadata } from "next";
import { Toaster } from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "Thumbnail Generator",
  description: "Thumbnail Generator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
