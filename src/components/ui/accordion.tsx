"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  type ReactNode,
} from "react";

type Size = "sm" | "md" | "lg";
type IconAlignment = "leading" | "trailing";

const SIZE_CLASSES: Record<Size, string> = {
  sm: "py-2",
  md: "py-3",
  lg: "py-4",
};

type AccordionContextValue = {
  type: "single" | "multiple";
  open: string[];
  toggle: (value: string) => void;
  size: Size;
  flush: boolean;
  iconAlignment: IconAlignment;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion subcomponents must be used inside <Accordion>");
  return ctx;
}

export function Accordion({
  type = "single",
  defaultValue,
  size = "lg",
  flush = false,
  iconAlignment = "trailing",
  className,
  children,
}: {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  size?: Size;
  flush?: boolean;
  iconAlignment?: IconAlignment;
  className?: string;
  children: ReactNode;
}) {
  const initial =
    defaultValue === undefined
      ? []
      : Array.isArray(defaultValue)
        ? defaultValue
        : [defaultValue];
  const [open, setOpen] = useState<string[]>(initial);

  const toggle = (value: string) => {
    setOpen((prev) =>
      type === "single"
        ? prev.includes(value)
          ? []
          : [value]
        : prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value],
    );
  };

  return (
    <AccordionContext.Provider
      value={{ type, open, toggle, size, flush, iconAlignment }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

const ItemContext = createContext<{
  value: string;
  isOpen: boolean;
  disabled: boolean;
  triggerId: string;
  contentId: string;
} | null>(null);

function useItem() {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error("AccordionItem subcomponents must be used inside <AccordionItem>");
  return ctx;
}

export function AccordionItem({
  value,
  disabled = false,
  children,
}: {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}) {
  const { open } = useAccordion();
  const triggerId = useId();
  const contentId = useId();
  const isOpen = open.includes(value);

  return (
    <ItemContext.Provider value={{ value, isOpen, disabled, triggerId, contentId }}>
      <div className="border-t border-gray-300">{children}</div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({ children }: { children: ReactNode }) {
  const { toggle, size, flush, iconAlignment } = useAccordion();
  const { value, isOpen, disabled, triggerId, contentId } = useItem();

  const px = flush ? "px-0" : "px-4";
  const titleColor = disabled ? "text-gray-400" : "text-gray-950";

  return (
    <h3 className="m-0">
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        disabled={disabled}
        onClick={() => toggle(value)}
        className={`flex w-full items-center gap-4 ${px} ${SIZE_CLASSES[size]} text-md font-semibold ${titleColor} transition-colors not-disabled:hover:bg-gray-100 not-disabled:active:bg-gray-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gray-950 disabled:cursor-not-allowed ${iconAlignment === "leading" ? "flex-row-reverse" : ""}`}
      >
        <span className="flex-1 text-start rtl:text-end">{children}</span>
        <ChevronDown isOpen={isOpen} disabled={disabled} />
      </button>
    </h3>
  );
}

export function AccordionContent({ children }: { children: ReactNode }) {
  const { flush } = useAccordion();
  const { isOpen, disabled, triggerId, contentId } = useItem();

  if (!isOpen) return null;

  const contentColor = disabled ? "text-gray-300" : "text-gray-700";
  // ltr: 8px top, 24px bottom, 48px right, 16px left
  // rtl mirrors automatically via logical properties
  const padding = flush ? "ps-0 pe-8 pt-2 pb-6" : "ps-4 pe-12 pt-2 pb-6";

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      className={`${padding} text-md ${contentColor}`}
    >
      {children}
    </div>
  );
}

function ChevronDown({ isOpen, disabled }: { isOpen: boolean; disabled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${disabled ? "text-gray-400" : "text-gray-950"}`}
    >
      <path
        d="M3.5 5.5L8 10L12.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
