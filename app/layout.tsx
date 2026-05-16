import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JG University | Modern Learning for Future Careers",
  description:
    "A refreshed landing page concept for JG University, Ahmedabad with future-ready programmes, experiential learning, and industry-connected education.",
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
