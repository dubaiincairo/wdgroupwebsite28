import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بوابة WD Group",
  description: "بوابة الخدمات الرقمية لمجموعة WD.",
};

export default function ArabicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
}
