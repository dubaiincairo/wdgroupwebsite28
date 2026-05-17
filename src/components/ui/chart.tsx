import type { ReactNode } from "react";

// Color palettes -------------------------------------------------------------

type Palette = "brand" | "color";

const BRAND_COLORS = [
  "var(--color-brand-600)",
  "var(--color-brand-400)",
  "var(--color-brand-200)",
  "var(--color-success-600)",
  "var(--color-brand-800)",
  "var(--color-success-900)",
  "var(--color-brand-700)",
];

const COLOR_COLORS = [
  "var(--color-gold-400)",
  "var(--color-brand-300)",
  "var(--color-warning-400)",
  "var(--color-info-400)",
  "var(--color-lavender-500)",
  "var(--color-error-400)",
];

function paletteColor(palette: Palette, index: number): string {
  const list = palette === "brand" ? BRAND_COLORS : COLOR_COLORS;
  return list[index % list.length];
}

// Legend ---------------------------------------------------------------------

export function ChartLegend({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={`m-0 flex list-none flex-wrap items-start gap-3 p-0 ${className}`}
    >
      {children}
    </ul>
  );
}

export function ChartLegendItem({
  label,
  color,
  shape = "circle",
}: {
  label: string;
  color: string;
  shape?: "circle" | "square";
}) {
  return (
    <li className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={`block size-2 shrink-0 ${shape === "circle" ? "rounded-full" : "rounded-xs"}`}
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-normal text-gray-700">{label}</span>
    </li>
  );
}

// Pie / Donut Chart ----------------------------------------------------------

export type PieDatum = {
  label: string;
  value: number;
  color?: string;
};

export function PieChart({
  data,
  size = 240,
  palette = "brand",
  hole = true,
  showLegend = true,
  ariaLabel = "Pie chart",
  className = "",
}: {
  data: PieDatum[];
  size?: number;
  palette?: Palette;
  hole?: boolean;
  showLegend?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const radius = size / 2;
  const innerRadius = hole ? radius * 0.55 : 0;

  const cumulative: number[] = [];
  data.reduce((acc, d) => {
    cumulative.push(acc);
    return acc + d.value;
  }, 0);

  const segments = data.map((d, i) => {
    const start = (cumulative[i] / total) * 2 * Math.PI;
    const end = ((cumulative[i] + d.value) / total) * 2 * Math.PI;
    return {
      path: arcPath(radius, radius, radius, innerRadius, start, end),
      fill: d.color ?? paletteColor(palette, i),
      label: d.label,
      value: d.value,
    };
  });

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={ariaLabel}
      >
        {segments.map((s, i) => (
          <path key={i} d={s.path} fill={s.fill}>
            <title>{`${s.label}: ${s.value}`}</title>
          </path>
        ))}
      </svg>
      {showLegend && (
        <ChartLegend>
          {data.map((d, i) => (
            <ChartLegendItem
              key={i}
              label={d.label}
              color={d.color ?? paletteColor(palette, i)}
            />
          ))}
        </ChartLegend>
      )}
    </div>
  );
}

function arcPath(
  cx: number,
  cy: number,
  outer: number,
  inner: number,
  start: number,
  end: number,
): string {
  const sweep = end - start;
  if (Math.abs(sweep - 2 * Math.PI) < 1e-6) {
    if (inner > 0) {
      return [
        `M ${cx} ${cy - outer}`,
        `A ${outer} ${outer} 0 1 1 ${cx} ${cy + outer}`,
        `A ${outer} ${outer} 0 1 1 ${cx} ${cy - outer}`,
        `M ${cx} ${cy - inner}`,
        `A ${inner} ${inner} 0 1 0 ${cx} ${cy + inner}`,
        `A ${inner} ${inner} 0 1 0 ${cx} ${cy - inner}`,
        "Z",
      ].join(" ");
    }
    return [
      `M ${cx} ${cy - outer}`,
      `A ${outer} ${outer} 0 1 1 ${cx} ${cy + outer}`,
      `A ${outer} ${outer} 0 1 1 ${cx} ${cy - outer}`,
      "Z",
    ].join(" ");
  }
  const x1o = cx + outer * Math.sin(start);
  const y1o = cy - outer * Math.cos(start);
  const x2o = cx + outer * Math.sin(end);
  const y2o = cy - outer * Math.cos(end);
  const largeArc = sweep > Math.PI ? 1 : 0;
  if (inner > 0) {
    const x1i = cx + inner * Math.sin(start);
    const y1i = cy - inner * Math.cos(start);
    const x2i = cx + inner * Math.sin(end);
    const y2i = cy - inner * Math.cos(end);
    return [
      `M ${x1o} ${y1o}`,
      `A ${outer} ${outer} 0 ${largeArc} 1 ${x2o} ${y2o}`,
      `L ${x2i} ${y2i}`,
      `A ${inner} ${inner} 0 ${largeArc} 0 ${x1i} ${y1i}`,
      "Z",
    ].join(" ");
  }
  return [
    `M ${cx} ${cy}`,
    `L ${x1o} ${y1o}`,
    `A ${outer} ${outer} 0 ${largeArc} 1 ${x2o} ${y2o}`,
    "Z",
  ].join(" ");
}

// Line Chart -----------------------------------------------------------------

export type LineSeries = {
  label: string;
  data: number[];
  color?: string;
};

export function LineChart({
  series,
  xLabels,
  yMax,
  yMin = 0,
  yTickCount = 9,
  width = 480,
  height = 180,
  palette = "brand",
  area = true,
  showLegend = true,
  ariaLabel = "Line chart",
  className = "",
}: {
  series: LineSeries[];
  xLabels: string[];
  yMax?: number;
  yMin?: number;
  yTickCount?: number;
  width?: number;
  height?: number;
  palette?: Palette;
  area?: boolean;
  showLegend?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const dataMax = Math.max(yMin + 1, ...series.flatMap((s) => s.data));
  const max = yMax ?? dataMax;
  const span = max - yMin || 1;
  const ticks: number[] = [];
  for (let i = 0; i < yTickCount; i++) {
    ticks.push(
      Math.round(span * ((yTickCount - 1 - i) / (yTickCount - 1)) + yMin),
    );
  }
  const xCount = Math.max(1, xLabels.length);
  const xStep = xCount > 1 ? width / (xCount - 1) : 0;
  const toY = (v: number) => height - ((v - yMin) / span) * height;

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {showLegend && (
        <ChartLegend>
          {series.map((s, i) => (
            <ChartLegendItem
              key={i}
              label={s.label}
              color={s.color ?? paletteColor(palette, i)}
            />
          ))}
        </ChartLegend>
      )}
      <div className="flex items-stretch gap-2">
        <div
          className="flex flex-col justify-between pe-2 text-end text-sm text-gray-700"
          style={{ height }}
        >
          {ticks.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <div className="flex-1">
          <svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            role="img"
            aria-label={ariaLabel}
          >
            {ticks.map((_, i) => {
              const y = (i / (yTickCount - 1)) * height;
              return (
                <line
                  key={i}
                  x1={0}
                  y1={y}
                  x2={width}
                  y2={y}
                  stroke="var(--color-gray-100)"
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
            {series.map((s, i) => {
              const color = s.color ?? paletteColor(palette, i);
              const linePoints = s.data
                .map((v, j) => `${j * xStep},${toY(v)}`)
                .join(" ");
              const areaPath =
                s.data.length > 1
                  ? `M 0 ${height} L ${s.data
                      .map((v, j) => `${j * xStep} ${toY(v)}`)
                      .join(" L ")} L ${(s.data.length - 1) * xStep} ${height} Z`
                  : "";
              return (
                <g key={i}>
                  {area && areaPath && (
                    <path d={areaPath} fill={color} fillOpacity={0.1} />
                  )}
                  <polyline
                    points={linePoints}
                    fill="none"
                    stroke={color}
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              );
            })}
          </svg>
          <div className="flex justify-between pt-2 text-sm font-medium text-gray-700">
            {xLabels.map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Bar Chart (stacked, vertical) ---------------------------------------------

export type BarDatum = {
  label: string;
  values: number[];
};

export function BarChart({
  data,
  series,
  yMax,
  yTickCount = 9,
  height = 180,
  barWidth = 32,
  palette = "brand",
  showLegend = true,
  className = "",
}: {
  data: BarDatum[];
  series: string[];
  yMax?: number;
  yTickCount?: number;
  height?: number;
  barWidth?: number;
  palette?: Palette;
  showLegend?: boolean;
  className?: string;
}) {
  const sumValues = (d: BarDatum) => d.values.reduce((s, v) => s + v, 0);
  const max = yMax ?? Math.max(1, ...data.map(sumValues));
  const ticks: number[] = [];
  for (let i = 0; i < yTickCount; i++) {
    ticks.push(Math.round((max * (yTickCount - 1 - i)) / (yTickCount - 1)));
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {showLegend && (
        <ChartLegend>
          {series.map((s, i) => (
            <ChartLegendItem
              key={i}
              label={s}
              color={paletteColor(palette, i)}
            />
          ))}
        </ChartLegend>
      )}
      <div className="flex items-stretch gap-2">
        <div
          className="flex flex-col justify-between pe-2 text-end text-sm text-gray-700"
          style={{ height }}
        >
          {ticks.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <div className="flex-1">
          <div className="relative" style={{ height }}>
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
              {ticks.map((_, i) => (
                <div key={i} className="border-t border-gray-100" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-end">
              {data.map((d, di) => {
                const total = sumValues(d);
                return (
                  <div
                    key={di}
                    className="flex flex-1 flex-col items-center justify-end"
                  >
                    <div
                      className="flex flex-col-reverse"
                      style={{
                        width: barWidth,
                        height: `${(total / max) * 100}%`,
                      }}
                    >
                      {d.values.map((v, si) => (
                        <div
                          key={si}
                          style={{
                            flexGrow: v,
                            backgroundColor: paletteColor(palette, si),
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex pt-2 text-sm text-gray-700">
            {data.map((d, i) => (
              <span key={i} className="flex-1 text-center">
                {d.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
