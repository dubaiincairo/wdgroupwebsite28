import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

export function CEOQuote() {
  const t = useTranslations("CEOQuote");
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
      <Quote className="size-10 mx-auto text-muted-foreground" />
      <blockquote className="mt-8 text-2xl md:text-3xl font-medium leading-relaxed tracking-tight">
        “{t("quote")}”
      </blockquote>
      <figcaption className="mt-8">
        <div className="font-semibold">{t("name")}</div>
        <div className="text-sm text-muted-foreground mt-1">{t("title")}</div>
      </figcaption>
    </section>
  );
}
