import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.neutral.200),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,theme(colors.neutral.800),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
          <span className="block">{t("title1")}</span>
          <span className="block">{t("title2")}</span>
          <span className="block text-muted-foreground">{t("title3")}</span>
        </h1>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t("ctaPrimary")}
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
