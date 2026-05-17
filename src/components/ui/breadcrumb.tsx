"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Item = {
  label: string;
  href?: string;
};

export function Breadcrumb({
  items,
  maxItems = 5,
  className = "",
}: {
  items: Item[];
  maxItems?: number;
  className?: string;
}) {
  type Entry =
    | { kind: "item"; label: string; href?: string }
    | { kind: "overflow"; hidden: Item[] };

  const shouldCollapse = items.length > maxItems;
  // When collapsed: show first + overflow + last 3 (matches Figma "Levels=>5")
  const visible: Entry[] = shouldCollapse
    ? [
        { kind: "item", ...items[0] },
        { kind: "overflow", hidden: items.slice(1, -3) },
        ...items.slice(-3).map((i): Entry => ({ kind: "item", ...i })),
      ]
    : items.map((i): Entry => ({ kind: "item", ...i }));

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center">
        {visible.map((entry, i) => {
          const isLast = i === visible.length - 1;
          const isFirst = i === 0;
          return (
            <li key={i} className="flex items-center">
              {!isFirst && <Separator />}
              {entry.kind === "overflow" ? (
                <OverflowItem items={entry.hidden} />
              ) : isLast ? (
                <span
                  aria-current="page"
                  className="text-sm text-gray-400 ms-1 first:ms-0"
                >
                  {entry.label}
                </span>
              ) : entry.href ? (
                <Link
                  href={entry.href}
                  className="text-sm text-gray-700 hover:underline ms-1 first:ms-0"
                >
                  {entry.label}
                </Link>
              ) : (
                <span className="text-sm text-gray-700 ms-1 first:ms-0">
                  {entry.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Separator() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mx-1 shrink-0 text-gray-400 rtl:-scale-x-100"
    >
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OverflowItem({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative ms-1 first:ms-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="text-sm text-gray-700 hover:underline focus-visible:outline-2 focus-visible:outline-gray-950 rounded-sm"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        …
      </button>
      {open && items.length > 0 && (
        <ul
          role="menu"
          className="absolute start-0 top-6 z-10 min-w-38 rounded-sm border border-gray-200 bg-white p-1 shadow-xl"
        >
          {items.map((item, i) => (
            <li key={i} role="none">
              {item.href ? (
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block rounded-sm px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  role="menuitem"
                  className="block rounded-sm px-2 py-2 text-sm text-gray-700"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
}

// Lower-level building blocks for callers who want full control
export function BreadcrumbList({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center">{children}</ol>
    </nav>
  );
}

export function BreadcrumbItem({
  href,
  current,
  children,
}: {
  href?: string;
  current?: boolean;
  children: ReactNode;
}) {
  const cls = current
    ? "text-sm text-gray-400"
    : "text-sm text-gray-700 hover:underline";
  return (
    <li className="flex items-center *:first:[&+li]:hidden">
      {href && !current ? (
        <Link href={href} className={cls}>
          {children}
        </Link>
      ) : (
        <span aria-current={current ? "page" : undefined} className={cls}>
          {children}
        </span>
      )}
    </li>
  );
}

export function BreadcrumbSeparator() {
  return (
    <li aria-hidden="true" className="flex items-center">
      <Separator />
    </li>
  );
}
