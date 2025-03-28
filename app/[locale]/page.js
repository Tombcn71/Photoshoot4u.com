import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TranslationsProvider from "@/components/TranslationsProvider";
import ExplainerSection from "@/components/ExplainerSection";
import Hero5 from "@/components/Hero5";
import Faq from "@/components/Faq";
import PricingSection from "@/components/PricingSection";
import initTranslations from "../i18n";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
const i18nNamespaces = ["home"];

export const dynamic = "force-dynamic";

export default async function Index({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["home"]);

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
          {" "}
          <Hero5 />
          <ExplainerSection />
          <Faq />
          <PricingSection /> <Footer />
        </TranslationsProvider>
      </>
    </>
  );
}
