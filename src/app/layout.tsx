import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
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
    "Real-time collaboration with AI superpowers. Plan, build, and ship faster with your team.",
  keywords: ["collaboration", "project management", "AI", "team", "real-time"],
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
        <Toaster
          theme="dark"
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(20, 20, 28, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              color: "#fff",
              backdropFilter: "blur(20px)",
            },
          }}
        />
      </body>
    </html>
  );
}