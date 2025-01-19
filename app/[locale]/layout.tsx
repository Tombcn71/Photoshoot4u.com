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
  title: "The AI headshot photographer for professionals | Photoshoot4u",
  description:
    "Our cutting-edge AI technology captures stunning professional headshots in minutes right from the comfort of your own home or office",
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
      {" "}
      <GoogleTagManager
        gtmId="
GTM-MH2K6TPL"
      />
      <body className="min-h-screen flex flex-col">
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
