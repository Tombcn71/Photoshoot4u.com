import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
const PixelTracker = dynamic(() => import("@/components/PixelTracker"), {
  ssr: false,
});

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
GTM-MH2K6TPL"
      />
      <Head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=
            PageView&noscript=1"
          />
        </noscript>{" "}
      </Head>
      {/* End Meta Pixel Code */}
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
