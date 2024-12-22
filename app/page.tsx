import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import hero5 from "/public/hero.png";

import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";
import Gallery from "@/components/gallery";
import Hero5 from "@/components/Hero5";
import Faq from "@/components/Faq";

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
        {" "}
        <Hero5 /> <Gallery /> <ExplainerSection />
        <Faq />
        <PricingSection />
      </>
    </>
  );
}
