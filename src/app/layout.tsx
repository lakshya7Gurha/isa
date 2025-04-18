import "@/app/globals.css";
import "@fontsource-variable/space-grotesk";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Impact Startup Academy - Build Profitable Startups with Purpose",
  description: "Learn how to build startups that tackle important societal problems AND are self-sustainable in our 5-week cohort-based course.",
  keywords: ["impact startup", "startup course", "purpose-driven", "profitable startups", "social impact"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r63in113ny");
            `,
          }}
        />
      </head>
      <body className="font-space-grotesk">{children}</body>
    </html>
  );
}
