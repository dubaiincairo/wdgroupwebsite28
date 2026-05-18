import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-primary-pastel/40 via-background to-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-tiffany-pastel/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary-tint/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:py-36">
        <p className="mb-6 inline-block rounded-pill bg-primary-pastel px-4 py-1.5 font-arabic text-sm font-semibold text-primary-dark">
          مجموعة دبليو دي للأعمال
        </p>

        <h1 className="font-arabic text-4xl font-extrabold leading-[1.15] text-dark-blue sm:text-6xl lg:text-7xl">
          <span className="block">رؤية راسخة،</span>
          <span className="block">قطاعات متعددة،</span>
          <span className="block text-primary">مستقبل واعد</span>
        </h1>

        <p className="mt-8 max-w-2xl font-arabic text-lg leading-relaxed text-gray-tint sm:text-xl">
          مجموعة سعودية متنوعة الأنشطة تمتد عبر قطاعات الضيافة والتصنيع والمقاولات.
          نُرسّخ حضورنا وفق أهداف رؤية ٢٠٣٠.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="primary" size="lg">
            تعرّف على المجموعة
          </Button>
          <Button variant="outline" size="lg">
            استكشف قطاعاتنا
          </Button>
        </div>
      </div>
    </section>
  );
}
