import { Button } from "@/components/ui/Button";

const colorGroups = [
  {
    name: "Primary (Green)",
    swatches: [
      { name: "primary", hex: "#26634B" },
      { name: "primary-shade", hex: "#066058" },
      { name: "primary-tint", hex: "#27AA8C" },
      { name: "primary-pastel", hex: "#ACDDC7" },
      { name: "primary-dark", hex: "#144D3F" },
    ],
  },
  {
    name: "Secondary (Blue)",
    swatches: [
      { name: "secondary", hex: "#005A96" },
      { name: "secondary-shade", hex: "#0053BA" },
      { name: "secondary-tint", hex: "#0054AE" },
      { name: "secondary-pastel", hex: "#339EEC" },
    ],
  },
  {
    name: "Dark Blue",
    swatches: [
      { name: "dark-blue", hex: "#160F3E" },
      { name: "dark-blue-shade", hex: "#1F255B" },
      { name: "dark-blue-tint", hex: "#444061" },
      { name: "dark-blue-pastel", hex: "#CDCCD5" },
    ],
  },
  {
    name: "Tiffany",
    swatches: [
      { name: "tiffany", hex: "#0AEBD7" },
      { name: "tiffany-shade", hex: "#046459" },
      { name: "tiffany-tint", hex: "#4ECEBB" },
      { name: "tiffany-pastel", hex: "#A9E2D7" },
    ],
  },
  {
    name: "Violet",
    swatches: [
      { name: "violet", hex: "#5505CD" },
      { name: "violet-shade", hex: "#3C2B7D" },
      { name: "violet-tint", hex: "#5830B4" },
      { name: "violet-pastel", hex: "#AC9FD5" },
    ],
  },
  {
    name: "Grayscale",
    swatches: [
      { name: "gray", hex: "#323232" },
      { name: "gray-shade", hex: "#242424" },
      { name: "gray-tint", hex: "#595959" },
      { name: "gray-pastel", hex: "#EAEAEA" },
    ],
  },
  {
    name: "Semantic",
    swatches: [
      { name: "success", hex: "#006604" },
      { name: "info", hex: "#339EEC" },
      { name: "warning", hex: "#FFC107" },
      { name: "danger", hex: "#AF0818" },
      { name: "orange", hex: "#FD7E14" },
    ],
  },
];

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
      <header className="mb-12 border-b border-gray-pastel pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Saudi Government Design System
        </p>
        <h1 className="mt-2 text-h1 font-extrabold text-dark-blue">Platforms Code · Tokens</h1>
        <p className="mt-4 max-w-2xl text-gray-tint">
          Official tokens from <code className="rounded bg-gray-pastel px-1.5 py-0.5 text-sm">govsa-ds</code>, exposed
          as Tailwind v4 utilities. Use <code className="rounded bg-gray-pastel px-1.5 py-0.5 text-sm">bg-primary</code>,
          <code className="rounded bg-gray-pastel px-1.5 py-0.5 text-sm ms-1">text-secondary</code>,
          <code className="rounded bg-gray-pastel px-1.5 py-0.5 text-sm ms-1">rounded-pill</code>, etc.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 text-h3 font-extrabold text-dark-blue">Colors</h2>
        <div className="space-y-8">
          {colorGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 text-h5 font-semibold text-gray">{group.name}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {group.swatches.map((s) => (
                  <div
                    key={s.name}
                    className="overflow-hidden rounded-card border border-gray-pastel"
                  >
                    <div className="h-20 w-full" style={{ backgroundColor: s.hex }} />
                    <div className="p-3">
                      <p className="text-sm font-semibold text-dark-blue">{s.name}</p>
                      <p className="text-xs text-gray-tint">{s.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-h3 font-extrabold text-dark-blue">Typography</h2>
        <div className="space-y-4 rounded-card border border-gray-pastel p-6">
          <p className="text-h1 font-extrabold text-dark-blue">H1 · 2.5rem · text-h1</p>
          <p className="text-h2 font-extrabold text-dark-blue">H2 · 2rem · text-h2</p>
          <p className="text-h3 font-extrabold text-dark-blue">H3 · 1.75rem · text-h3</p>
          <p className="text-h4 font-bold text-dark-blue">H4 · 1.5rem · text-h4</p>
          <p className="text-h5 font-bold text-dark-blue">H5 · 1.25rem · text-h5</p>
          <p className="text-h6 font-semibold text-dark-blue">H6 · 1rem · text-h6</p>
          <p className="text-base text-gray">Body · 1rem · default body text</p>
          <p className="text-sm text-gray-tint">Small · 0.875rem · captions, labels</p>
          <p className="font-arabic text-h3 text-dark-blue" dir="rtl">
            نظام التصميم الموحد للجهات الحكومية السعودية
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-h3 font-extrabold text-dark-blue">Buttons</h2>
        <div className="space-y-4 rounded-card border border-gray-pastel p-6">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tiffany">Tiffany</Button>
            <Button variant="violet">Violet</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-h3 font-extrabold text-dark-blue">Radii</h2>
        <div className="flex flex-wrap gap-4 rounded-card border border-gray-pastel p-6">
          <div className="flex flex-col items-center gap-2">
            <div className="h-20 w-20 rounded-card bg-primary-pastel" />
            <span className="text-xs text-gray-tint">rounded-card · 0.5rem</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-20 w-32 rounded-pill bg-primary-pastel" />
            <span className="text-xs text-gray-tint">rounded-pill · 3rem</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-20 w-32 rounded-pill-lg bg-primary-pastel" />
            <span className="text-xs text-gray-tint">rounded-pill-lg · 3.6rem</span>
          </div>
        </div>
      </section>
    </main>
  );
}
