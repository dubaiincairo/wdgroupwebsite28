import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Sectors } from "@/components/sections/sectors";
import { Identity } from "@/components/sections/identity";
import { CEOQuote } from "@/components/sections/ceo-quote";
import { FinalCTA } from "@/components/sections/final-cta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Sectors />
        <Identity />
        <CEOQuote />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
