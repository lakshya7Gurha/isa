import "@/app/globals.css";
import "@fontsource-variable/space-grotesk";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Startup Academy - Build Profitable Startups with Purpose",
  description: "Learn how to build startups that tackle important societal problems AND are self-sustainable in our 5-week cohort-based course.",
  keywords: ["impact startup", "startup course", "purpose-driven", "profitable startups", "social impact"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-space-grotesk">{children}</body>
    </html>
  );
}
