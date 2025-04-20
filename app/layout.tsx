import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { cn, getURL } from "@/lib/utils"
import type { Viewport } from "next";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};


const geistSans = localFont({
  src: "./fonts/ProductSans-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/ProductSans-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// You gotta change here for you
export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: {
    default: "Sigmadayo",
    template: "%s | Sigmadayo",
  },
  description: "better than e-z.bio 🤓?"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body className={cn(
              "min-h-dvh bg-zinc-950 text-foreground antialiased",
              geistSans.variable, geistMono.variable
            )}>
                <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}