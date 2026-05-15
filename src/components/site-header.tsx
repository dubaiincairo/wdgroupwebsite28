import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

export function SiteHeader() {
  const t = useTranslations("Nav");

  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          WD Group
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            {t("home")}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {t("contact")}
          </Link>
          <LocaleSwitcher />
        </nav>
        <div className="md:hidden">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
