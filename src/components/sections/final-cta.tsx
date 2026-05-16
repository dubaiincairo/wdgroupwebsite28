import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  const t = useTranslations("FinalCTA");
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="rounded-3xl bg-foreground text-background px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-background/70 text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity self-start md:self-end whitespace-nowrap"
        >
          {t("button")}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
