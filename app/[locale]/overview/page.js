import initTranslations from "@/app/i18n";
import ClientSideModelsList from "@/components/realtime/ClientSideModelsList";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
const i18nNamespaces = ["home"];

export const dynamic = "force-dynamic";

export default async function Index({ params: { locale } }) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { t, resources } = await initTranslations(locale, ["home"]);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div>User not found</div>;
  }

  const { data: models } = await supabase
    .from("models")
    .select(
      `*, samples (
      *
    )`
    )
    .eq("user_id", user.id);

  return <ClientSideModelsList serverModels={models ?? []} />;
}
