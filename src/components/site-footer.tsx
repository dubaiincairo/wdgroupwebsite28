import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" className="font-bold text-xl tracking-tight">
              WD Group
            </Link>
            <p className="mt-3 text-sm font-medium text-muted-foreground tracking-wide">
              {t("tagline")}
            </p>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm">
              {t("description")}
            </p>
          </div>

          <FooterCol title={t("companyCol")}>
            <FooterLink href="/">{t("about")}</FooterLink>
            <FooterLink href="/">{t("careers")}</FooterLink>
            <FooterLink href="/contact">{t("contact")}</FooterLink>
          </FooterCol>

          <FooterCol title={t("sectorsCol")}>
            <FooterLink href="/">{t("hospitality")}</FooterLink>
            <FooterLink href="/">{t("manufacturing")}</FooterLink>
            <FooterLink href="/">{t("contracting")}</FooterLink>
          </FooterCol>

          <FooterCol title={t("connectCol")}>
            <a
              href="#"
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              SwissBlue <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GreenWood <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href="mailto:info@wdgroup.sa"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="size-3.5" /> info@wdgroup.sa
            </a>
            <a
              href="tel:+966123456789"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              dir="ltr"
            >
              <Phone className="size-3.5" /> +966 12 345 6789
            </a>
          </FooterCol>
        </div>

        <div className="mt-14 pt-6 border-t border-border text-xs text-muted-foreground">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">{title}</h4>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
