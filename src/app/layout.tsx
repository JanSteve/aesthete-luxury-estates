import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AESTHETE | Unrivaled Estates — Exclusive Luxury Real Estate",
  description:
    "Representing the most discerning buyers and the world's most architectural masterpieces. Exclusive ECR & OMR luxury villas, penthouses, and estates in Chennai. By Private Invitation Only.",
  keywords: [
    "luxury real estate Chennai",
    "ECR villas",
    "OMR premium properties",
    "exclusive estates Chennai",
    "ultra-luxury homes India",
    "AESTHETE real estate",
    "private estate advisory",
  ],
  openGraph: {
    title: "AESTHETE | Unrivaled Elegance. Unlisted Estates.",
    description:
      "Exclusive access to Chennai's most coveted ECR & OMR properties. Off-market luxury estates by private invitation only.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased bg-obsidian text-on-surface">
        {children}
      </body>
    </html>
  );
}
