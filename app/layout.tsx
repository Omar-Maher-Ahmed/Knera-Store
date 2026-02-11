
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import { CartProvider } from "../context/CartContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://knera-store.vercel.app"),
  title: {
    default: "Knera Store",
    template: "%s | Knera Store",
  },
  description:
    "Premium handmade crochet bags and decor crafted with timeless design.",
  keywords: [
    "handmade bags",
    "crochet bags",
    "macrame decor",
    "knera store",
  ],
  openGraph: {
    title: "Knera Store",
    description:
      "Premium handmade crochet bags and decor crafted with timeless design.",
    url: "/",
    siteName: "Knera Store",
    images: [
      {
        url: "/images/bag-1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knera Store",
    description:
      "Premium handmade crochet bags and decor crafted with timeless design.",
    images: ["/images/bag-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <PageWrapper>{children}</PageWrapper>
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
