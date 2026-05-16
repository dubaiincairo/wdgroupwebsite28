import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

export function SiteHeader() {
  const t = useTranslations("Nav");

  const items = [
    { href: "/", key: "about" },
    { href: "/", key: "hospitality" },
    { href: "/", key: "manufacturing" },
    { href: "/", key: "contracting" },
    { href: "/", key: "careers" },
    { href: "/contact", key: "contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          WD Group
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {items.map((it) => (
            <Link
              key={it.key}
              href={it.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(it.key)}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
