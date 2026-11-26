import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Manrope, Syne } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "GUMO",
    "กูโม่",
    "กัมมี่ผักผลไม้",
    "พรีไบโอติก",
    "Shine Muscat",
    "wellness",
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/brand/product-sachet-v2.png",
        width: 500,
        height: 500,
        alt: "GUMO Daily Muscat Grape Flavour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/brand/product-sachet-v2.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/brand/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${syne.variable} ${manrope.variable} ${ibmPlexThai.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-thai">{children}</body>
    </html>
  );
}
