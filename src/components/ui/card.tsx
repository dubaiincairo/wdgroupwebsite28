"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Effect = "shadow" | "none" | "stroke";

type CardContextValue = { disabled: boolean };
const CardContext = createContext<CardContextValue>({ disabled: false });

function useCardContext() {
  return useContext(CardContext);
}

function containerClasses(effect: Effect, disabled: boolean, interactive: boolean) {
  const bg = disabled ? "bg-gray-200" : "bg-white";
  const hover = !disabled && interactive ? "hover:bg-gray-50" : "";
  let effectClass = "";
  if (effect === "shadow") effectClass = "shadow-md";
  else if (effect === "stroke")
    effectClass = disabled ? "border border-gray-400" : "border border-gray-300";
  const focus = interactive
    ? "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gray-950"
    : "";
  return [
    "relative flex flex-col items-start p-4 gap-6 rounded-lg",
    bg,
    hover,
    effectClass,
    focus,
  ]
    .filter(Boolean)
    .join(" ");
}

type BaseProps = {
  effect?: Effect;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

export function Card({
  effect = "shadow",
  disabled = false,
  className = "",
  children,
}: BaseProps) {
  return (
    <CardContext.Provider value={{ disabled }}>
      <div className={`${containerClasses(effect, disabled, false)} ${className}`}>
        {children}
      </div>
    </CardContext.Provider>
  );
}

export function CardFeaturedIcon({ children }: { children?: ReactNode }) {
  const { disabled } = useCardContext();
  const bg = disabled ? "bg-gray-100" : "bg-brand-50";
  const color = disabled ? "text-gray-400" : "text-success-700";
  return (
    <span
      aria-hidden={children ? undefined : "true"}
      className={`flex size-12 shrink-0 items-center justify-center rounded-full ${bg} ${color}`}
    >
      {children ?? <CheckCircleIcon />}
    </span>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-2 text-start rtl:text-end">
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  const { disabled } = useCardContext();
  const color = disabled ? "text-gray-400" : "text-gray-800";
  return <h3 className={`m-0 text-lg font-bold ${color}`}>{children}</h3>;
}

export function CardDescription({ children }: { children: ReactNode }) {
  const { disabled } = useCardContext();
  const color = disabled ? "text-gray-400" : "text-gray-800";
  return <p className={`m-0 text-md font-normal ${color}`}>{children}</p>;
}

export function CardActions({ children }: { children: ReactNode }) {
  return <div className="flex w-full items-center gap-4">{children}</div>;
}

// Expandable ---------------------------------------------------------------

const ExpandableContext = createContext<{
  expanded: boolean;
  setExpanded: (v: boolean) => void;
  disabled: boolean;
} | null>(null);

export function CardExpandable({
  effect = "shadow",
  disabled = false,
  expanded: controlledExpanded,
  defaultExpanded = false,
  onExpandedChange,
  className = "",
  children,
}: BaseProps & {
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultExpanded);
  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : uncontrolled;

  const setExpanded = (v: boolean) => {
    if (!isControlled) setUncontrolled(v);
    onExpandedChange?.(v);
  };

  return (
    <CardContext.Provider value={{ disabled }}>
      <ExpandableContext.Provider value={{ expanded, setExpanded, disabled }}>
        <div className={`${containerClasses(effect, disabled, false)} ${className}`}>
          {children}
        </div>
      </ExpandableContext.Provider>
    </CardContext.Provider>
  );
}

export function CardExpandToggle({ label = "Toggle details" }: { label?: string }) {
  const ctx = useContext(ExpandableContext);
  if (!ctx) throw new Error("CardExpandToggle must be used inside CardExpandable");
  const { expanded, setExpanded, disabled } = ctx;
  return (
    <div className="flex w-full items-center justify-end">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        disabled={disabled}
        aria-expanded={expanded}
        aria-label={label}
        className="flex size-10 items-center justify-center rounded-sm text-foreground not-disabled:hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gray-950"
      >
        <ChevronIcon direction={expanded ? "up" : "down"} />
      </button>
    </div>
  );
}

export function CardExpandedContent({ children }: { children: ReactNode }) {
  const ctx = useContext(ExpandableContext);
  if (!ctx || !ctx.expanded) return null;
  return <div className="w-full text-start rtl:text-end">{children}</div>;
}

// Selectable ---------------------------------------------------------------

const SelectableContext = createContext<{
  selected: boolean;
  disabled: boolean;
} | null>(null);

export function CardSelectable({
  effect = "shadow",
  disabled = false,
  selected: controlledSelected,
  defaultSelected = false,
  onSelectedChange,
  className = "",
  children,
}: BaseProps & {
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultSelected);
  const isControlled = controlledSelected !== undefined;
  const selected = isControlled ? controlledSelected : uncontrolled;

  const toggle = () => {
    if (disabled) return;
    const next = !selected;
    if (!isControlled) setUncontrolled(next);
    onSelectedChange?.(next);
  };

  return (
    <CardContext.Provider value={{ disabled }}>
      <SelectableContext.Provider value={{ selected, disabled }}>
        <button
          type="button"
          role="checkbox"
          aria-checked={selected}
          onClick={toggle}
          disabled={disabled}
          className={`${containerClasses(effect, disabled, true)} w-full cursor-pointer disabled:cursor-not-allowed ${className}`}
        >
          {children}
          <CardSelectionIndicator />
        </button>
      </SelectableContext.Provider>
    </CardContext.Provider>
  );
}

function CardSelectionIndicator() {
  const ctx = useContext(SelectableContext);
  if (!ctx) return null;
  const { selected, disabled } = ctx;

  let styles: string;
  if (selected && disabled) styles = "bg-gray-200";
  else if (selected) styles = "bg-brand-600";
  else if (disabled) styles = "border border-gray-400 bg-transparent";
  else styles = "border border-gray-500 bg-transparent";

  return (
    <span
      aria-hidden="true"
      className={`absolute end-7 top-7 flex size-5 items-center justify-center rounded-xs ${styles}`}
    >
      {selected ? <CheckmarkIcon /> : null}
    </span>
  );
}

// Icons --------------------------------------------------------------------

function CheckCircleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${direction === "up" ? "rotate-180" : ""}`}
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

function CheckmarkIcon() {
  return (
    <svg
      width={10}
      height={8}
      viewBox="0 0 10 8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
