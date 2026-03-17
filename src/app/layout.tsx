import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import InvisibleFooter from "@/components/InvisibleFooter";

export const metadata: Metadata = {
  title: "AI Model Tracker - Latest Models, Benchmarks & Research",
  description: "Track the latest AI models with benchmarks, parameters, size, and research papers. Stay updated with trending models from Hugging Face.",
  keywords: ["AI models", "machine learning", "benchmarks", "LLM", "Hugging Face", "model tracker"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <InvisibleFooter />
      </body>
    </html>
  );
}
