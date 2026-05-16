import { useTranslations } from "next-intl";
import { Compass, Target, Sparkles } from "lucide-react";

export function Identity() {
  const t = useTranslations("Identity");
  const items = [
    { label: t("visionLabel"), body: t("vision"), Icon: Compass },
    { label: t("missionLabel"), body: t("mission"), Icon: Target },
    { label: t("valuesLabel"), body: t("values"), Icon: Sparkles },
  ];

  return (
    <section className="bg-muted/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {t("tag")}
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
          {t("title")}
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(({ label, body, Icon }) => (
            <div key={label}>
              <div className="size-11 rounded-xl bg-background border border-border flex items-center justify-center">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{label}</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
