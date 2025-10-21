import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

export const metadata: Metadata = {
  title: "AnikeBrands - Creative Graphics Designer",
  description: "Professional graphics design services by AnikeBrands. Specializing in branding, logo design, print design, and creative visual solutions.",
  keywords: "graphics design, branding, logo design, print design, creative design, AnikeBrands",
  authors: [{ name: "AnikeBrands" }],
  creator: "AnikeBrands",
  icons: {
    icon: "/anikefavicon-white.svg",
    shortcut: "/anikefavicon-white.svg",
    apple: "/anikefavicon-white.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anikebrands.com",
    title: "AnikeBrands - Creative Graphics Designer",
    description: "Professional graphics design services by AnikeBrands. Specializing in branding, logo design, print design, and creative visual solutions.",
    siteName: "AnikeBrands",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnikeBrands - Creative Graphics Designer",
    description: "Professional graphics design services by AnikeBrands. Specializing in branding, logo design, print design, and creative visual solutions.",
    creator: "@anikebrands",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}