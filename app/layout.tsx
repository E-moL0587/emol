import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaito Takeuchi's Portfolio",
  description: "A portfolio website by Kaito Takeuchi, showcasing skills and projects.",
  icons: { icon: "/images/profile.jpg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
