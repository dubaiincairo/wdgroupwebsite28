"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const other = locale === "ar" ? "en" : "ar";

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.replace(pathname, { locale: other });
        });
      }}
      className="text-sm font-medium hover:text-primary transition-colors disabled:opacity-50"
    >
      {t("switchTo")}
    </button>
  );
}
