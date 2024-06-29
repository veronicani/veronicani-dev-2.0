import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import type { Metadata } from "next";
import { fira, dm_serif } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Veronica Ni",
  description: "Design-first Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fira.variable} font-mono ${dm_serif.variable} font-display`}
      >
        {children}
      </body>
    </html>
  );
}
