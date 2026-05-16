import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Building2,
  FileText,
  GraduationCap,
  HeartPulse,
  Search,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "الخدمات الحكومية",
    description: "أنجز إجراءاتك الرسمية إلكترونياً في خطوات بسيطة وآمنة.",
  },
  {
    icon: Wallet,
    title: "المدفوعات والفواتير",
    description: "سدد رسومك ومستحقاتك من مكان واحد بسهولة وأمان.",
  },
  {
    icon: HeartPulse,
    title: "الصحة والرعاية",
    description: "احجز مواعيدك واستعرض ملفك الصحي عبر بوابة موحدة.",
  },
  {
    icon: GraduationCap,
    title: "التعليم",
    description: "خدمات الطلاب وأولياء الأمور والاعتمادات الأكاديمية.",
  },
  {
    icon: Briefcase,
    title: "الأعمال والمنشآت",
    description: "أصدر التراخيص وأدر بيانات منشأتك في منصة واحدة.",
  },
  {
    icon: Building2,
    title: "العقارات والإسكان",
    description: "خدمات التملك والإيجار وتسجيل العقارات إلكترونياً.",
  },
];

const news = [
  {
    tag: "إعلان",
    title: "إطلاق الجيل الجديد من البوابة الرقمية الموحدة",
    date: "١٦ مايو ٢٠٢٦",
  },
  {
    tag: "تحديث",
    title: "إضافة باقة جديدة من الخدمات الإلكترونية لقطاع الأعمال",
    date: "١٢ مايو ٢٠٢٦",
  },
  {
    tag: "خبر",
    title: "شراكة استراتيجية لتعزيز التحول الرقمي في المنطقة",
    date: "٠٥ مايو ٢٠٢٦",
  },
];

export default function ArabicHome() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
              W
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold">مجموعة WD</p>
              <p className="text-xs text-muted-foreground">البوابة الرقمية</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="#services" className="hover:text-primary transition-colors">
              الخدمات
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              عن المجموعة
            </Link>
            <Link href="#news" className="hover:text-primary transition-colors">
              الأخبار
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              تواصل معنا
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              EN
            </Link>
            <Button size="sm">تسجيل الدخول</Button>
          </div>
        </div>
      </header>

      <section className="border-b border-border bg-gradient-to-bl from-primary/5 via-background to-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-6">منصة الخدمات الموحدة</Badge>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              بوابتك الرقمية الموحدة
              <br />
              <span className="text-primary">لجميع الخدمات</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              نوفر لك تجربة رقمية متكاملة تجمع الخدمات الأساسية في مكان واحد
              بتصميم بسيط وآمن يدعم اللغة العربية بالكامل.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg">
                ابدأ الآن
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                استكشف الخدمات
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm">
              <Search className="ms-3 h-5 w-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="ابحث عن خدمة..."
                className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <Button size="sm">بحث</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "+٢٥٠", label: "خدمة رقمية" },
              { value: "٩٨٪", label: "رضا المستفيدين" },
              { value: "+١.٢م", label: "مستخدم نشط" },
              { value: "٢٤/٧", label: "دعم متواصل" },
            ].map((s) => (
              <Card key={s.label}>
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge variant="muted" className="mb-3">
              الخدمات
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">الخدمات الأكثر استخداماً</h2>
            <p className="mt-2 text-muted-foreground">
              مجموعة الخدمات الرقمية المتاحة عبر البوابة.
            </p>
          </div>
          <Button variant="ghost">
            عرض كل الخدمات
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group cursor-pointer">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <CardTitle>{s.title}</CardTitle>
                <CardDescription>{s.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  ابدأ الخدمة
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "أمان وموثوقية",
              text: "بنية تحتية معتمدة وبروتوكولات حماية متقدمة لبياناتك.",
            },
            {
              icon: FileText,
              title: "تجربة موحدة",
              text: "واجهة عربية واضحة ومتسقة عبر جميع الخدمات والقطاعات.",
            },
            {
              icon: HeartPulse,
              title: "وصول شامل",
              text: "متاحة على جميع الأجهزة، وتدعم متطلبات الوصول الرقمي.",
            },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="news" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <Badge variant="muted" className="mb-3">
              الأخبار
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">آخر المستجدات</h2>
          </div>
          <Button variant="ghost">
            كل الأخبار
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {news.map((n) => (
            <Card key={n.title} className="cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-4">
                  {n.tag}
                </Badge>
                <h3 className="text-lg font-semibold leading-snug">{n.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{n.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                W
              </div>
              <p className="text-sm text-muted-foreground">
                © ٢٠٢٦ مجموعة WD. جميع الحقوق محفوظة.
              </p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary">سياسة الخصوصية</Link>
              <Link href="#" className="hover:text-primary">الشروط والأحكام</Link>
              <Link href="#" className="hover:text-primary">المساعدة</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
