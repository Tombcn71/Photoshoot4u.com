import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title:
    "Professional AI headshot photography, ready in 30 minutes | Photoshoot4u",
  description:
    "Upload 6+ photo's of yourself and receive 40 professional quality HD headshots, save time and money and do an AI photo shoot from your laptop or phone.",
};
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}
const CrispWithNoSSR = dynamic(() => import("../../components/crisp"));

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: any;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)} className=" scroll-smooth">
      <GoogleTagManager
        gtmId="
GTM-NZX53VMC"
      />
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZX53VMC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }>
            <Navbar />
            <CrispWithNoSSR />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
