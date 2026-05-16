import { useTranslations } from "next-intl";

export function Stats() {
  const t = useTranslations("Stats");
  const items = [
    { num: t("item1Number"), label: t("item1Label") },
    { num: t("item2Number"), label: t("item2Label") },
    { num: t("item3Number"), label: t("item3Label") },
  ];

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-baseline gap-4 md:gap-5 md:border-s md:first:border-s-0 md:ps-6 md:first:ps-0 border-border"
          >
            <div className="text-5xl md:text-6xl font-bold tracking-tight tabular-nums">
              {it.num}
            </div>
            <p className="text-sm text-muted-foreground leading-snug max-w-[16ch]">
              {it.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
