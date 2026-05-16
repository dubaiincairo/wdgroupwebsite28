import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Building2, Factory, HardHat } from "lucide-react";

export function Sectors() {
  const t = useTranslations("Sectors");

  const sectors = [
    { key: "hospitality" as const, Icon: Building2 },
    { key: "manufacturing" as const, Icon: Factory },
    { key: "contracting" as const, Icon: HardHat },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {t("tag")}
      </p>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
        {t("title")}
      </h2>
      <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
        {t("subtitle")}
      </p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {sectors.map(({ key, Icon }) => (
          <article
            key={key}
            className="group rounded-2xl border border-border bg-background p-7 hover:border-foreground/30 transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="size-11 rounded-xl bg-muted flex items-center justify-center">
                <Icon className="size-5" />
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                {t(`${key}.badge`)}
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              {t(`${key}.name`)}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(`${key}.subtitle`)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 flex-1">
              {t(`${key}.description`)}
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline underline-offset-4"
            >
              {t(`${key}.link`)}
              <ArrowUpRight className="size-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
