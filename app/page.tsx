import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TranslationsProvider from "@/components/TranslationsProvider";
import ExplainerSection from "@/components/ExplainerSection";
import Gallery from "@/components/gallery";
import Hero5 from "@/components/Hero5";
import Faq from "@/components/Faq";
import PricingSection from "@/components/PricingSection";

const i18nNamespaces = ["home"];

export const dynamic = "force-dynamic";

export default async function Index() {
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
        <Hero5 /> <Gallery /> <ExplainerSection />
      </>
    </>
  );
}
