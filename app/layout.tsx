import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Eman Shalapy | Frontend Developer",
    template: "%s | Eman Shalapy",
  },

  description:
    "Eman Shalapy is a Frontend Developer specializing in React, Next.js, TypeScript and modern web applications.",

  keywords: [
    "Eman Shalapy",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
  ],

  authors: [
    {
      name: "Eman Shalapy",
    },
  ],

  creator: "Eman Shalapy",

  openGraph: {
    title: "Eman Shalapy | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js and TypeScript.",
    type: "website",
    locale: "en_US",
    siteName: "Eman Shalapy",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eman Shalapy | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js and TypeScript.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
