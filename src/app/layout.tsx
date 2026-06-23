import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nexus — AI-Powered Team Collaboration Platform",
  description:
    "Real-time collaboration with AI superpowers. Manage projects, brainstorm on whiteboards, and ship faster with your team.",
  keywords: [
    "collaboration",
    "project management",
    "AI",
    "team",
    "real-time",
    "kanban",
  ],
  authors: [{ name: "Nexus" }],
  openGraph: {
    title: "Nexus — AI-Powered Team Collaboration Platform",
    description: "Real-time collaboration with AI superpowers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}