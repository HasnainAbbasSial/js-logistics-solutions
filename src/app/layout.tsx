import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JS Logistics Solutions | Premium Truck Dispatching Services",
  description: "Independent truck dispatch services for owner-operators and small fleets. We prioritize your profitability with top-paying loads and 24/7 expert support.",
  keywords: "JS Logistics, truck dispatch, freight solutions, dispatching services, owner operator support",
  openGraph: {
    title: "JS Logistics Solutions | Premium Truck Dispatching Services",
    description: "Expert truck dispatch services tailored for owner-operators and small fleets.",
    url: "https://jslogisticsolutions.com",
    siteName: "JS Logistics Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-inter`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
