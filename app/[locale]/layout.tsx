import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";

export const metadata = {
  title: "Professional headshots without a photographer | Photoshoot4u",
  description:
    "Elevate your online presence with studio-quality AI headshots. No need to arrange a time-consuming photoshoot",
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
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
