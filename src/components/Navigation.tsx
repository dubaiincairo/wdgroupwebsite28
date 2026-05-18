import Link from "next/link";

const navItems = [
  { href: "/about", label: "من نحن" },
  { href: "/hospitality", label: "الضيافة" },
  { href: "/manufacturing", label: "التصنيع" },
  { href: "/contracting", label: "المقاولات" },
  { href: "/careers", label: "التوظيف" },
  { href: "/contact", label: "اتصل بنا" },
];

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-pastel bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-card bg-primary text-base font-extrabold text-white">
            WD
          </span>
          <span className="hidden font-arabic text-base font-bold text-dark-blue sm:inline">
            مجموعة WD
          </span>
        </Link>

        <ul className="hidden items-center gap-7 font-arabic text-base font-semibold text-dark-blue lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-pill border-2 border-primary px-4 py-1.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          aria-label="Switch to English"
        >
          English
        </button>
      </div>
    </nav>
  );
}
