import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TranslationsProvider from "@/components/TranslationsProvider";
import ExplainerSection from "@/components/ExplainerSection";
import Gallery from "@/components/gallery";
import Hero5 from "@/components/Hero5";
import Faq from "@/components/Faq";
import PricingSection from "@/components/PricingSection";
import initTranslations from "../i18n";

const i18nNamespaces = ["home"];

export const dynamic = "force-dynamic";

export default async function Index({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <>
      <>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}>
          <Hero5 /> <Gallery /> <ExplainerSection />
          <Faq />
          <PricingSection />{" "}
        </TranslationsProvider>
      </>
    </>
  );
}
