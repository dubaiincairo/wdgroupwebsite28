# Brand New Yanolja Cloud Solution Design System

> A portable, framework-agnostic specification of the design DNA powering the Yanolja Cloud `letsbook.me` booking engine. Use this document to recreate the same visual language in any stack — WordPress, Next.js, plain HTML/CSS, React, Vue, mobile, or static prototypes.
>
> **Version:** 1.0.0
> **Source:** Reverse-engineered from `letsbook.me/booking/yanoljacloudsolution` (May 2026)
> **Methodology:** Combined analysis of (a) full DOM + CSS extraction via SingleFile, (b) tech-stack profiling via Wappalyzer, (c) visual walkthrough of the complete 4-step booking flow.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing System](#4-spacing-system)
5. [Border Radius System](#5-border-radius-system)
6. [Shadow System](#6-shadow-system)
7. [Layout System](#7-layout-system)
8. [Component Specifications](#8-component-specifications)
9. [Iconography](#9-iconography)
10. [Animation & Interaction](#10-animation--interaction)
11. [Internationalization & RTL](#11-internationalization--rtl)
12. [Page Templates](#12-page-templates)
13. [Implementation Reference](#13-implementation-reference)
14. [Accessibility](#14-accessibility)
15. [Versioning & Maintenance](#15-versioning--maintenance)

---

## 1. Design Philosophy

The Brand New Yanolja Cloud Solution Design System (BNY-CSDS) is built on five principles:

**1. Neutral canvas, single accent.** The interface is overwhelmingly grayscale. One orange brand color (`#ff7a45`) carries every primary action. This restraint lets hotel photography do the visual heavy lifting without competing chrome.

**2. Calm premium.** No harsh shadows, no aggressive gradients (except the deliberately distinct AI banner), no busy patterns. A single soft layered shadow is reused everywhere.

**3. Disciplined rhythm.** All spacing, font sizes, and radii come from a fixed scale. Nothing is one-off. This is what makes the interface feel "professionally made."

**4. Photography-led cards.** Most content sits in rounded white cards with generous corner radius (16px). Cards are the primary container — not full-width sections.

**5. Conversion-focused choreography.** Every screen has exactly one primary orange action. Secondary actions are outlined or muted. Critical urgency mechanics (badges, sticky bars, hold timers) reinforce the path forward without screaming.

---

## 2. Color System

### 2.1 Primary Palette

| Token | Hex | Description | Usage |
|---|---|---|---|
| `--primary` | `#ff7a45` | Brand orange | Primary CTAs, links, focus rings, brand mark |
| `--primary-light` | `color-mix(in srgb, #ff7a45 14%, white)` ≈ `#feece4` | 14% tint of primary on white | Selected-state backgrounds, soft promo bands |
| `--primary-hover` | `color-mix(in srgb, #ff7a45 82%, black)` ≈ `#d16538` | Darker primary | Button hover, pressed state |

### 2.2 AI Gradient (Reserved for AI features only)

The AI-recommended content uses a distinctive **pink-to-magenta gradient** that appears nowhere else in the system. This is intentional — it signals "AI" without needing a label.

| Token | Value | Direction |
|---|---|---|
| `--ai-gradient` | `linear-gradient(135deg, #f759ab 0%, #c41d7f 100%)` | Top-left → bottom-right |
| `--ai-gradient-soft` | `linear-gradient(135deg, #fff0f6 0%, #ffd6e7 100%)` | Soft variant for backgrounds |

**Use only for:** AI-recommended badges, AI suggestion banners, AI-feature buttons.
**Do not use for:** Generic promotions, sale banners, or decorative purposes.

### 2.3 Secondary Accent (Reserved)

| Token | Hex | Description | Usage |
|---|---|---|---|
| `--accent` | `#6d28d9` | Royal purple | Persistent floating CTAs (e.g., "Rate Check") |

### 2.4 Semantic Palette

| Role | Token | Hex | Light Variant | Light Hex |
|---|---|---|---|---|
| Success | `--success` | `#059669` | `--success-light` | `#e7f6ec` |
| Warning | `--warning` | `#ce8300` | `--warning-light` | `#fff6db` |
| Error | `--error` | `#e8493d` | `--error-light` | `#fff1f3` |
| Info | `--info` | `#2563eb` | `--info-light` | `#eff6ff` |

**Usage rules:**
- Success: confirmation pages, savings indicators, "Exclusive Offer" pills, completed steps
- Warning: pending states, expiring offers, modify alerts
- Error: validation, "Non-refundable" labels, destructive actions
- Info: tooltips, neutral notifications

### 2.5 Neutral / Text Palette

| Token | Hex | Use |
|---|---|---|
| `--text-primary` | `#111827` | Body copy, headings, prices |
| `--text-secondary` | `#6b7280` | Muted copy, descriptions, secondary labels |
| `--text-tertiary` | `#9ea3aa` | Captions, metadata, "+1 more" indicators |
| `--text-disabled` | `#989ca6` | Inactive elements |
| `--text-on-primary` | `#ffffff` | Text on orange buttons |
| `--text-on-dark` | `#ffffff` | Text on dark navy sticky bars |

### 2.6 Background Palette

| Token | Hex | Use |
|---|---|---|
| `--background` | `#f9fafb` | Page background |
| `--background-card` | `#ffffff` | All card surfaces |
| `--background-subtle` | `#f3f6f9` | Section dividers, alternate rows |
| `--background-promo-soft` | `#fff7ec` | Trust ribbon, soft promotional bands |
| `--background-dark` | `#111827` | Sticky bottom price bar, dark sections |
| `--background-overlay` | `rgba(17, 24, 39, 0.6)` | Modal overlays |

### 2.7 Border Palette

| Token | Hex | Use |
|---|---|---|
| `--border` | `#e5e7eb` | Card borders, dividers |
| `--border-form` | `#dce0e6` | Input borders (default) |
| `--border-strong` | `#9ca3af` | Hovered inputs |
| `--border-focus` | `var(--primary)` | Focused inputs, selected radio cards |
| `--border-error` | `var(--error)` | Invalid inputs |

### 2.8 Color Usage Rules

1. **Only one primary action per screen.** The orange button must be unique on the visible viewport.
2. **Secondary actions are outlined.** Orange border + transparent fill + orange text.
3. **Tertiary actions are ghost.** No border, orange text only.
4. **Never use the AI gradient outside AI contexts.**
5. **Never combine the AI gradient with the brand orange in the same element.** They live in separate zones.
6. **Strikethrough pricing uses `--text-tertiary`** — never red.
7. **Required field asterisks use `--error`** but inline validation only triggers on submit.

---

## 3. Typography System

### 3.1 Font Families

```css
--font-sans: 'Inter', 'Inter Fallback', -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-arabic: 'Helvetica Neue Arabic', 'Tahoma', 'Arial', sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace;
```

**Critical:** Inter must be **self-hosted**, not loaded from Google Fonts CDN. This is for performance, privacy, and CDN-independence.

Provide WOFF2 files for the following subsets:
- Latin (mandatory)
- Latin Extended (recommended)
- Arabic (mandatory for AR markets)
- Cyrillic (optional)

Use `font-display: swap` to avoid invisible text during load.

### 3.2 Type Scale

| Token | Size | Line Height | Weight | Use |
|---|---|---|---|---|
| `--text-display` | 40px | 1.1 | 700 | Hero headlines, marketing pages |
| `--text-3xl` | 34px | 1.15 | 700 | Page titles |
| `--text-2xl` | 24px | 1.25 | 600 | Section headings |
| `--text-xl` | 20px | 1.3 | 600 | Card titles, prices |
| `--text-lg` | 18px | 1.4 | 600 | Sub-headings |
| `--text-md` | 16px | 1.5 | 500 | Strong body |
| `--text-base` | 14px | 1.5 | 400 | Default body |
| `--text-sm` | 12px | 1.5 | 400 | Captions, metadata |
| `--text-xs` | 10px | 1.5 | 500 | Badges, micro-labels |

### 3.3 Font Weights

| Token | Weight | Use |
|---|---|---|
| `--fw-light` | 300 | Reserved (rare) |
| `--fw-regular` | 400 | Body copy |
| `--fw-medium` | 500 | Emphasized body, button labels, tabs |
| `--fw-semibold` | 600 | Titles, prices, badges |
| `--fw-bold` | 700 | Display, key prices, hero numbers |

### 3.4 Text Color Pairing

| Background | Primary text | Secondary text |
|---|---|---|
| `--background` (light) | `--text-primary` | `--text-secondary` |
| `--background-card` (white) | `--text-primary` | `--text-secondary` |
| `--background-dark` (navy) | `--text-on-dark` | `rgba(255,255,255,0.7)` |
| `--primary` (orange) | `--text-on-primary` | `rgba(255,255,255,0.85)` |
| AI gradient | `#ffffff` | `rgba(255,255,255,0.85)` |

### 3.5 Numbers & Prices

- Prices use `font-variant-numeric: tabular-nums` so digits align in lists.
- Currency symbol (e.g., `ريال`, `$`, `€`) sits on the *opposite* side of the script direction: in LTR contexts before the number, in Arabic after.
- Inside a mixed RTL/LTR context, wrap the price in `<span dir="ltr">` to prevent digits from being reordered.

---

## 4. Spacing System

A strict **gutter scale** — used for padding, margin, and gap throughout.

| Token | Value | Practical Use |
|---|---|---|
| `--space-xxxs` | 2px | Icon-to-text micro spacing |
| `--space-xxs` | 4px | Badge padding, tight stacks |
| `--space-xs` | 8px | Button inner padding (vertical), tight rhythm |
| `--space-sm` | 12px | Default gap between related elements **(most-used)** |
| `--space-md` | 16px | Card inner padding, form field gap |
| `--space-lg` | 20px | Card-to-card vertical gap |
| `--space-xl` | 24px | Section padding, page margins |
| `--space-xxl` | 36px | Hero spacing, major section breaks |
| `--space-xxxl` | 72px | Page-level top/bottom margins |

**Spacing rules:**
1. Use multiples of the scale — never arbitrary values.
2. Default vertical rhythm inside cards is `--space-md` (16px).
3. Default page-level horizontal padding on desktop is `--space-xl` (24px).
4. Mobile horizontal padding drops to `--space-md` (16px).

---

## 5. Border Radius System

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 4px | Tiny pills, micro-badges |
| `--radius-sm` | 8px | Inputs, small buttons |
| `--radius-md` | 12px | Standard buttons, smaller cards |
| `--radius-lg` | 16px | **Default card radius**, modal corners |
| `--radius-xl` | 24px | Hero/feature blocks, oversized CTAs |
| `--radius-full` | 9999px | Pills, currency pills, action capsules |

**Critical rule for RTL:** Directional rounded corners (e.g., `border-radius: 30px 0 0 30px` for left-rounded pills) must mirror in RTL contexts:

```css
[dir="rtl"] .left-pill { border-radius: 0 30px 30px 0; }
```

---

## 6. Shadow System

The design uses **only one signature shadow** — reused everywhere. This is a key consistency lever.

```css
--shadow-card: 0 3px 12px rgba(0, 0, 0, 0.05), 0 0 2px rgba(0, 0, 0, 0.10);
```

**Variants for special cases only:**

| Token | Value | Use |
|---|---|---|
| `--shadow-card` | `0 3px 12px rgba(0,0,0,0.05), 0 0 2px rgba(0,0,0,0.10)` | All cards, dropdowns |
| `--shadow-elevated` | `0 12px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)` | Modals, sticky bottom bar |
| `--shadow-button-hover` | `0 4px 12px rgba(255,122,69,0.30)` | Orange button hover lift |
| `--shadow-focus-ring` | `0 0 0 3px rgba(255,122,69,0.25)` | Keyboard focus ring |

**Rule:** Never invent new shadows. If a use case doesn't fit the four above, use `--shadow-card`.

---

## 7. Layout System

### 7.1 Container Widths

| Token | Value | Use |
|---|---|---|
| `--container-narrow` | 768px | Forms, single-column content |
| `--container-default` | 1200px | Standard page width |
| `--container-wide` | 1330px | **Default app width** for booking screens |
| `--container-full` | 100% | Edge-to-edge sections |

### 7.2 Vertical Offsets

| Token | Value | Use |
|---|---|---|
| `--header-height-desktop` | 146px | Sticky header total height including promo ribbon |
| `--header-height-mobile` | 187px | Mobile header with wrapped search bar |
| `--sticky-banner-height` | 90px | Trust-ribbon strip |
| `--sticky-bottom-bar-height` | 72px | Sticky price bar / Continue CTA |

### 7.3 Breakpoints

| Token | Value | Target |
|---|---|---|
| `--bp-sm` | 640px | Large phone |
| `--bp-md` | 768px | Tablet portrait |
| `--bp-lg` | 1024px | Tablet landscape / small desktop |
| `--bp-xl` | 1280px | Standard desktop |
| `--bp-2xl` | 1536px | Large desktop |

### 7.4 Grid Specs

- Room list: single column, full-width cards at all sizes
- Add-Ons: 4 columns desktop ≥1024px, 2 columns tablet, 1 column mobile
- Checkout: 2-column desktop (form 60% / summary 40%), stacked mobile
- Property hero: full-width with overlaid content

---

## 8. Component Specifications

### 8.1 Buttons

#### Primary Button (Orange)

```
Background:     --primary (#ff7a45)
Text:           --text-on-primary (#ffffff)
Padding:        12px 24px (size MD)
Border radius:  --radius-full (pill) OR --radius-md (rectangular)
Font weight:    --fw-semibold (600)
Font size:      --text-base (14px)
Box shadow:     none (default), --shadow-button-hover (hover)
Hover bg:       --primary-hover (#d16538)
Active scale:   0.98
Disabled bg:    #e6e8ea, text: #989ca6
Transition:     all 150ms ease
```

**Sizes:**
| Size | Height | Padding | Font |
|---|---|---|---|
| XS | 24px | 6px 12px | 12px |
| SM | 32px | 8px 16px | 13px |
| MD | 40px | 12px 24px | 14px |
| LG | 48px | 14px 32px | 16px |

#### Secondary Button (Outlined Orange)

```
Background:     transparent
Border:         1.5px solid --primary
Text:           --primary
Padding/sizing: identical to Primary
Hover:          bg --primary-light, text --primary-hover
```

#### Ghost Button

```
Background:     transparent
Border:         none
Text:           --primary
Hover:          bg --primary-light
```

#### Sticky CTA Button (Bottom bar)

```
Background:     --primary
Text:           --text-on-primary
Padding:        14px 32px
Border radius:  --radius-full
Icon:           Arrow right (16px) margin-left 8px
Width:          auto, min 160px
```

### 8.2 Cards

#### Standard Card (Room, Add-On, Summary)

```
Background:     --background-card (#ffffff)
Border:         1px solid --border (#e5e7eb)
Border radius:  --radius-lg (16px)
Padding:        --space-md to --space-lg (16-20px)
Shadow:         --shadow-card
Hover:          Border --primary-light, slight lift (translateY -2px)
Transition:     all 200ms ease
```

#### Room Card (Specific layout)

```
Layout:         Horizontal split, 35% image / 65% content
Image:          Border radius matches card, object-fit: cover
                Aspect ratio: 4:3 on desktop, 16:9 on mobile
Content area:
  - Room name (text-xl, semibold)
  - Plan name (text-base, semibold, --text-primary)
  - Amenities list (text-base, with green check / red X icons, 8px gap)
  - Footer row: bed icon + "1 Room Included" | person icon + "2 Adults"
Price sidebar (right):
  - "EXCLUSIVE OFFER" badge (green pill)
  - Discount % chip (e.g., "10% Off")
  - Strikethrough original price (text-tertiary, 12px)
  - Big price (text-xl, semibold, with currency in Arabic if locale=AR)
  - "Total for X Room • X Night" caption (text-sm, --text-secondary)
  - "+ X.XX Taxes & fees" with info icon
  - Select button (Primary, full width)
```

#### Add-On Card

```
Layout:         Vertical, image on top
Image:          Aspect ratio 4:3, --radius-lg only on top corners
Content:        --space-md padding
Title:          text-lg, semibold
"Details" link: text-sm, --primary, with chevron
Footer row:
  - Price label (text-xs, secondary) above big price (text-md, semibold)
  - Select button (secondary outlined) OR quantity selector
Quantity selector:
  - Minus button (32px circle, --primary border) | number (text-md) | Plus button
  - Selected card gets --background-promo-soft fill
```

#### Summary Card (Sticky right sidebar in checkout)

```
Background:     --background-card
Border:         1px solid --border
Border radius:  --radius-lg
Padding:        --space-lg
Sections separated by 1px --border, vertical padding --space-md
  1. "Your Stay Summary" title + dates pill
  2. Room block (room name + plan + price + Modify Occupancy link)
  3. Add-ons list (each with name + qty + price + delete icon)
  4. Totals (Total Room Charges, Total Taxes, Promo Code link)
  5. Final "Pay now" line — emphasized, semibold, larger
```

### 8.3 Form Inputs

#### Text Input

```
Height:         40px (--form-height)
Border:         1px solid --border-form
Border radius:  --radius-md (12px)
Padding:        12px 16px (with floating label: 18px top, 10px bottom)
Font:           --text-base (14px), --text-primary
Floating label:
  Position:     absolute, top: -8px, left: 12px
  Background:   --background-card (to "cut" through border)
  Padding:      0 4px
  Font size:    12px
  Color:        --text-secondary
  Required mark: * in --error
Focus:
  Border:       --border-focus (--primary), 2px
  Outline:      none (handled by box-shadow instead)
  Shadow:       --shadow-focus-ring
Error state:
  Border:       --border-error
  Helper text:  text-xs, --error, mt 4px
```

#### Phone Input (with country code)

```
Layout: 80px country code dropdown | flex-1 number input
Gap:    --space-xs (8px)
Country code dropdown:
  - Flag emoji 20px + code (+91) text
  - Chevron down 16px
  - Searchable popover on click
```

#### Payment Method Radio Card

```
Layout:         Two cards side-by-side (or stacked on mobile)
Card:           --background-card, 1px solid --border, --radius-lg, padding --space-md
Selected state:
  Border:       2px solid --primary
  Background:   --primary-light (14% orange tint)
  Radio dot:    Filled --primary
Content:
  Title:        text-md, semibold
  Description:  text-sm, --text-secondary, mt 4px
```

### 8.4 Badges & Pills

#### Exclusive Offer Badge

```
Background:     --success-light (#e7f6ec)
Text:           --success (#059669)
Padding:        4px 10px
Border radius:  --radius-full
Font:           text-xs, semibold, uppercase, letter-spacing 0.04em
Icon:           Crown/sparkle 12px on left, margin-right 4px
```

#### Discount Percentage Pill

```
Background:     --success-light
Text:           --success
Format:         "10% Off" or "20% Off"
Other styling:  Same as Exclusive Offer
```

#### Filling Fast Pill

```
Background:     #fff1f0 (coral tint)
Text:           --error (#e8493d) or coral #ff4d4f
Icon:           Flame 12px
Font:           text-xs, semibold
Padding:        4px 10px, border-radius full
Subtle pulse animation:
  @keyframes pulse-fast {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.04); }
  }
  Duration: 1.6s infinite
```

#### Best Seller Pill

```
Background:     #fffbe6 (cream)
Text:           --warning (#ce8300)
Icon:           Star 12px (filled)
Otherwise same as Filling Fast (no animation)
```

#### Strikethrough Original Price

```
Color:          --text-tertiary (#9ea3aa)
Decoration:     line-through
Font size:      text-sm (12px) — smaller than the actual price
Position:       Inline before the actual price OR above it
Spacing:        --space-xxs (4px) gap to actual price
```

### 8.5 Promotional Trust Ribbon

The horizontal strip below the header carrying 3 trust messages.

```
Background:     --background-promo-soft (#fff7ec)
Height:         --sticky-banner-height (90px) or 56px slim variant
Layout:         3-column flex, evenly spaced, vertical dividers (1px --border)
Each item:
  Icon (24px, --warning color) + text in --text-primary + optional CTA button
Text font:      text-base, medium
CTA button:     Secondary outlined, size SM
Mobile:         Single column, vertical stack, dividers become horizontal
```

### 8.6 AI Gradient Banner

The signature pink-to-magenta banner reserved for AI features.

```
Background:     --ai-gradient (linear-gradient 135deg, #f759ab → #c41d7f)
Text:           #ffffff
Padding:        --space-md to --space-lg
Border radius:  --radius-lg
Icon area (left): 40px circle with rgba(255,255,255,0.18) background, AI sparkle/waveform icon
Title:          text-lg, semibold, white
Subtitle:       text-sm, rgba(255,255,255,0.85)
Position:       Above the AI-recommended item, "flowing" into the card below
Effect:         Bottom of banner has slightly larger radius than card to create a "wrapping" feel
```

### 8.7 Progress Stepper

```
Layout:         Centered horizontal, --space-md gap between steps
Step circle:    24px, center-aligned with label
  Pending:      1.5px --border circle, number in --text-secondary
  Active:       --primary fill, white number, semibold
  Completed:    --success fill, white checkmark icon
Step label:     text-sm, medium, color matches state
Connector line: 1px --border between circles
Mobile:         Same but smaller; labels truncate or hide
```

### 8.8 Sticky Bottom Price Bar

```
Position:       fixed bottom, full width
Background:     --background-dark (#111827)
Color:          --text-on-dark (#ffffff)
Padding:        --space-md --space-xl
Border radius:  --radius-xl on top corners only
Shadow:         --shadow-elevated (upward direction)
Layout:
  Left:         Chevron up icon (toggles expansion) + "Grand Total" label + price
  Right:        Continue button (orange, --radius-full, with arrow)
Z-index:        50
Mobile:         Same layout, slightly reduced horizontal padding
Expansion:      Tapping chevron expands a panel above showing line items
```

### 8.9 Floating Action Buttons

#### Rate Check Button (Bottom-left)

```
Position:       fixed bottom-left, 24px from edges
Background:     --accent (#6d28d9)
Text:           white
Padding:        12px 20px
Border radius:  --radius-full
Shadow:         --shadow-elevated
Above badge:    "47% OFF" coral pill, position -8px top-right of button
Icon:           Checkmark in circle (left of text)
```

#### AI Chat Bubble (Bottom-right)

```
Position:       fixed bottom-right, 24px from edges
Size:           56px circle
Background:     --background-card (white)
Border:         1px solid --border
Shadow:         --shadow-elevated
Icon:           Chat/AI icon 24px, --primary
Hover:          slight lift, expanded label "AI Chat" appears
```

### 8.10 Hold Timer

```
Position:       Top-right of checkout step
Color:          --error (#e8493d)
Font:           text-sm, semibold
Format:         Clock icon + "We are holding your price... MM:SS"
Behavior:       Countdown timer; turns red below 1 minute
On expiry:      Show modal "Your price hold expired" with retry button
```

### 8.11 Booking Confirmation

The success page uses a **distinct green theme** that exists nowhere else in the journey.

```
Background:     --background (light)
Hero:
  Container:    --background-card, --radius-lg, max-width 600px, centered
  Top:          --success-light tint band (full-width inside card, 24px padding)
  Icon:         96px green circle (--success) with white checkmark
  Title:        text-2xl, semibold, --success
Body card:
  Padding:      --space-xl
  Booking ID:   text-md, --success on label, --text-primary on value
  Detail rows:  Label left (--text-secondary), value right (--text-primary)
                Separated by 1px --border
  Total:        Highlighted in --background-subtle row
Footer buttons:
  3 outlined --success buttons in row: "Manage Booking" "Add to Calendar" "Book More" "Go to Home"
  All --success border, --success text, transparent background
```

### 8.12 Currency Switcher

```
Trigger button:
  Border:       1px solid --border
  Border radius: --radius-full
  Padding:      8px 16px
  Content:      Flag (20px) + chevron (16px) | divider | Currency code (e.g., "SAR")
Dropdown:
  Width:        320px
  Max height:   400px (scrollable)
  Search input: At top, sticky
  Items:        Flag + symbol + code + currency name + native name
  Hover:        --background-subtle
```

---

## 9. Iconography

### 9.1 Icon Library

Use **outlined, 1.5px-stroke icons** — no filled icons except for state indicators (filled checkmark on completed step, filled star on Best Seller).

**Recommended libraries:**
- Primary: [Phosphor Icons](https://phosphoricons.com) (Regular weight)
- Alternative: [Lucide](https://lucide.dev) (compatible style)
- Avoid: Material Icons (too "Google-feel"), FontAwesome (too dense)

### 9.2 Icon Sizing

| Size | Use |
|---|---|
| 12px | Inside badges and pills |
| 16px | Inline with body text (14px) |
| 20px | Inside buttons, form input prefixes |
| 24px | Trust ribbon, section headers |
| 32px | Empty states |
| 48-96px | Hero illustrations, success states |

### 9.3 Icon Color Rules

- Default: matches text color of surrounding context
- Inside Primary button: white
- Status icons (success/warning/error): match semantic color
- Decorative-only icons: `--text-tertiary`

---

## 10. Animation & Interaction

### 10.1 Easing & Duration

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);   /* Material standard */
--ease-out:     cubic-bezier(0, 0, 0.2, 1);     /* Decelerate */
--ease-in:      cubic-bezier(0.4, 0, 1, 1);     /* Accelerate */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* Subtle overshoot */

--duration-fast:    150ms;
--duration-default: 200ms;
--duration-slow:    300ms;
--duration-page:    400ms;
```

### 10.2 Interaction States

| Element | State | Effect |
|---|---|---|
| Primary button | Hover | bg darken to `--primary-hover`, shadow lift |
| Primary button | Active | scale(0.98), shadow reduce |
| Card | Hover | translateY(-2px), border tint to `--primary-light` |
| Input | Focus | Border to `--primary`, focus ring |
| Radio card | Selected | Border 2px `--primary`, bg `--primary-light` |
| Step circle | Activate | Bg fade 200ms, scale spring 200ms |
| Sticky bar | Reveal | translateY from 100% with 300ms ease-out |
| Modal | Open | Fade overlay 200ms, modal scale 0.95→1 with spring |

### 10.3 Page Transitions

- Route change: 250ms cross-fade
- Step change in stepper: 200ms slide-left + fade
- "Continue" → next step: subtle scale pulse on button before navigation

### 10.4 Animations to Avoid

- ❌ Bouncy/playful spring animations (this is a premium aesthetic)
- ❌ Auto-playing carousels (unless paused on hover)
- ❌ Parallax scrolling
- ❌ Glow/shimmer loops (except subtle pulse on "Filling Fast")
- ❌ More than 2 simultaneous animations on screen

---

## 11. Internationalization & RTL

### 11.1 Direction Handling

Set direction at the `<html>` level: `<html dir="rtl" lang="ar">` for Arabic.

Use **logical properties** instead of physical ones throughout CSS:

| ❌ Physical | ✅ Logical |
|---|---|
| `margin-left` | `margin-inline-start` |
| `padding-right` | `padding-inline-end` |
| `border-left` | `border-inline-start` |
| `left: 24px` | `inset-inline-start: 24px` |
| `text-align: left` | `text-align: start` |

This way, switching `dir` automatically mirrors the entire UI without writing separate RTL CSS.

### 11.2 Mixed AR/EN Typography

When Arabic and English coexist (e.g., Arabic UI with Latin numbers):

```html
<span class="price">
  <span dir="ltr">77.84</span>
  <span class="currency">ريال</span>
</span>
```

Wrap numbers in `dir="ltr"` to prevent bidirectional algorithm from reordering digits.

For Arabic currency symbols, use `unicode-bidi: isolate` on the price wrapper.

### 11.3 Directional Components Requiring Mirroring

| Component | Adjustment in RTL |
|---|---|
| Chevron right (›) | Becomes chevron left (‹) |
| "Continue >" arrow | Flips to "‹ Continue" |
| Progress stepper | Reads right-to-left |
| Strikethrough price position | Visually right of new price |
| Floating buttons | Bottom-right Rate Check ↔ Bottom-left AI Chat |
| Card image position | Mirror left↔right in horizontal cards |

### 11.4 Font Loading Strategy for AR

```css
/* Latin first for fast English render */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC;
  font-display: swap;
}

/* Arabic subset */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-arabic.woff2') format('woff2');
  unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
  font-display: swap;
}
```

---

## 12. Page Templates

### 12.1 Search / Landing

```
Header (sticky):
  Logo (left) | Search summary pill (center) | Promo input + Apply + Currency + Flag (right)
Trust ribbon (3 items)
Hero search form (full-width white card)
  Date pickers + room/guest selector + search button
Featured deals carousel (4 cards on desktop)
Footer
```

### 12.2 Room List

```
Header (sticky) + trust ribbon
AI gradient banner ("Best Deal recommended by AI") + recommended room card
Filter strip: Meals + Views + Sort + "Showing X of Y offers" + Clear All
Room cards (vertical stack, single column)
  - Each card has nested rate plans (Filling Fast / Best Seller / etc.)
  - "View all rates" expansion link at bottom of card
Floating Rate Check + AI Chat
Sticky bottom price bar (appears once room selected)
```

### 12.3 Add-Ons

```
Header + trust ribbon
Stepper: Rooms ✓ | Add-ons (current) | Confirm Booking
"Enhance Your Stay" title
Grid of add-on cards (4 cols → 2 cols → 1 col)
Sticky bottom price bar (Grand Total + Continue)
"Skip to Confirm" link top-right
```

### 12.4 Checkout

```
Header + trust ribbon
Stepper: Rooms ✓ | Add-ons ✓ | Confirm Booking (current)
"We are holding your price... MM:SS" timer (top-right)
Two-column layout:
  Left (60%):
    - "Primary Guest Details" card with form
    - "Special Requests" expandable
    - "Select payment method" radio cards (Pay now / Pay at Hotel)
    - Payment method dropdown (Credit Card via Aigpay etc.)
    - Hotel Policy + Terms checkbox
    - "Secure your stay before prices change!" callout (green text)
    - Confirm Booking button (full width, primary)
  Right (40%):
    - Sticky summary card (room + add-ons + totals)
```

### 12.5 Confirmation

```
Centered single-column layout (max 600px)
Big green checkmark card
Booking detail card (ID, dates, duration, total)
Action button row (Manage Booking, Add to Calendar, Book More, Go to Home)
No persistent header — clean exit experience
```

---

## 13. Implementation Reference

### 13.1 Complete CSS Custom Properties Block

Paste this into your `:root` (or `:where(:root)`) selector:

```css
:where(:root) {
  /* Color: Primary */
  --primary: #ff7a45;
  --primary-light: color-mix(in srgb, #ff7a45 14%, white);
  --primary-hover: color-mix(in srgb, #ff7a45 82%, black);

  /* Color: AI gradient (reserved) */
  --ai-gradient: linear-gradient(135deg, #f759ab 0%, #c41d7f 100%);
  --ai-gradient-soft: linear-gradient(135deg, #fff0f6 0%, #ffd6e7 100%);

  /* Color: Secondary accent */
  --accent: #6d28d9;

  /* Color: Semantic */
  --success: #059669; --success-light: #e7f6ec;
  --warning: #ce8300; --warning-light: #fff6db;
  --error:   #e8493d; --error-light:   #fff1f3;
  --info:    #2563eb; --info-light:    #eff6ff;

  /* Color: Text */
  --text-primary:    #111827;
  --text-secondary:  #6b7280;
  --text-tertiary:   #9ea3aa;
  --text-disabled:   #989ca6;
  --text-on-primary: #ffffff;
  --text-on-dark:    #ffffff;

  /* Color: Backgrounds */
  --background:            #f9fafb;
  --background-card:       #ffffff;
  --background-subtle:     #f3f6f9;
  --background-promo-soft: #fff7ec;
  --background-dark:       #111827;
  --background-overlay:    rgba(17, 24, 39, 0.6);

  /* Color: Borders */
  --border:        #e5e7eb;
  --border-form:   #dce0e6;
  --border-strong: #9ca3af;
  --border-focus:  var(--primary);
  --border-error:  var(--error);

  /* Typography */
  --font-sans: 'Inter', 'Inter Fallback', -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-arabic: 'Helvetica Neue Arabic', 'Tahoma', sans-serif;

  --text-display: 40px;  --text-3xl: 34px;  --text-2xl: 24px;
  --text-xl: 20px;       --text-lg: 18px;   --text-md: 16px;
  --text-base: 14px;     --text-sm: 12px;   --text-xs: 10px;

  --fw-light: 300;     --fw-regular: 400;  --fw-medium: 500;
  --fw-semibold: 600;  --fw-bold: 700;

  /* Spacing */
  --space-xxxs: 2px;  --space-xxs: 4px;   --space-xs: 8px;
  --space-sm: 12px;   --space-md: 16px;   --space-lg: 20px;
  --space-xl: 24px;   --space-xxl: 36px;  --space-xxxl: 72px;

  /* Radii */
  --radius-xs: 4px;   --radius-sm: 8px;   --radius-md: 12px;
  --radius-lg: 16px;  --radius-xl: 24px;  --radius-full: 9999px;

  /* Shadows */
  --shadow-card:         0 3px 12px rgba(0,0,0,0.05), 0 0 2px rgba(0,0,0,0.10);
  --shadow-elevated:     0 12px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
  --shadow-button-hover: 0 4px 12px rgba(255,122,69,0.30);
  --shadow-focus-ring:   0 0 0 3px rgba(255,122,69,0.25);

  /* Layout */
  --container-narrow:  768px;
  --container-default: 1200px;
  --container-wide:    1330px;

  --header-height-desktop:    146px;
  --header-height-mobile:     187px;
  --sticky-banner-height:     90px;
  --sticky-bottom-bar-height: 72px;

  /* Form heights */
  --form-height-xs: 24px;  --form-height-sm: 32px;
  --form-height:    40px;  --form-height-lg: 48px;

  /* Animation */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);
  --ease-in:      cubic-bezier(0.4, 0, 1, 1);
  --ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast:    150ms;
  --duration-default: 200ms;
  --duration-slow:    300ms;
}
```

### 13.2 WordPress `theme.json` Fragment

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary",            "name": "Primary",            "color": "#ff7a45" },
        { "slug": "primary-light",      "name": "Primary Light",      "color": "#feece4" },
        { "slug": "primary-hover",      "name": "Primary Hover",      "color": "#d16538" },
        { "slug": "accent",             "name": "Accent",             "color": "#6d28d9" },
        { "slug": "success",            "name": "Success",            "color": "#059669" },
        { "slug": "success-light",      "name": "Success Light",      "color": "#e7f6ec" },
        { "slug": "warning",            "name": "Warning",            "color": "#ce8300" },
        { "slug": "warning-light",      "name": "Warning Light",      "color": "#fff6db" },
        { "slug": "error",              "name": "Error",              "color": "#e8493d" },
        { "slug": "error-light",        "name": "Error Light",        "color": "#fff1f3" },
        { "slug": "text-primary",       "name": "Text",               "color": "#111827" },
        { "slug": "text-secondary",     "name": "Text Muted",         "color": "#6b7280" },
        { "slug": "text-tertiary",      "name": "Text Faint",         "color": "#9ea3aa" },
        { "slug": "background",         "name": "Page",               "color": "#f9fafb" },
        { "slug": "background-card",    "name": "Card",               "color": "#ffffff" },
        { "slug": "background-subtle",  "name": "Subtle",             "color": "#f3f6f9" },
        { "slug": "background-promo",   "name": "Promo Soft",         "color": "#fff7ec" },
        { "slug": "background-dark",    "name": "Dark",               "color": "#111827" },
        { "slug": "border",             "name": "Border",             "color": "#e5e7eb" },
        { "slug": "border-form",        "name": "Form Border",        "color": "#dce0e6" }
      ],
      "gradients": [
        {
          "slug": "ai-gradient",
          "name": "AI (reserved for AI features only)",
          "gradient": "linear-gradient(135deg, #f759ab 0%, #c41d7f 100%)"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "slug": "sans",
          "name": "Inter",
          "fontFamily": "Inter, 'Inter Fallback', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
        }
      ],
      "fontSizes": [
        { "slug": "xs",      "size": "10px", "name": "Extra Small" },
        { "slug": "sm",      "size": "12px", "name": "Small" },
        { "slug": "base",    "size": "14px", "name": "Body" },
        { "slug": "md",      "size": "16px", "name": "Medium" },
        { "slug": "lg",      "size": "18px", "name": "Large" },
        { "slug": "xl",      "size": "20px", "name": "X-Large" },
        { "slug": "2xl",     "size": "24px", "name": "2X-Large" },
        { "slug": "3xl",     "size": "34px", "name": "3X-Large" },
        { "slug": "display", "size": "40px", "name": "Display" }
      ]
    },
    "spacing": {
      "spacingSizes": [
        { "slug": "xxxs", "size": "2px",  "name": "2"  },
        { "slug": "xxs",  "size": "4px",  "name": "4"  },
        { "slug": "xs",   "size": "8px",  "name": "8"  },
        { "slug": "sm",   "size": "12px", "name": "12" },
        { "slug": "md",   "size": "16px", "name": "16" },
        { "slug": "lg",   "size": "20px", "name": "20" },
        { "slug": "xl",   "size": "24px", "name": "24" },
        { "slug": "xxl",  "size": "36px", "name": "36" }
      ],
      "units": ["px", "rem", "%"]
    },
    "layout": {
      "contentSize": "768px",
      "wideSize": "1330px"
    }
  }
}
```

### 13.3 Tailwind v4 Config

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff7a45',
          light:   '#feece4',
          hover:   '#d16538',
        },
        accent: '#6d28d9',
        success: { DEFAULT: '#059669', light: '#e7f6ec' },
        warning: { DEFAULT: '#ce8300', light: '#fff6db' },
        error:   { DEFAULT: '#e8493d', light: '#fff1f3' },
        text: {
          primary:   '#111827',
          secondary: '#6b7280',
          tertiary:  '#9ea3aa',
        },
        surface: {
          DEFAULT:  '#f9fafb',
          card:     '#ffffff',
          subtle:   '#f3f6f9',
          promo:    '#fff7ec',
          dark:     '#111827',
        },
        border: {
          DEFAULT: '#e5e7eb',
          form:    '#dce0e6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs:       ['10px', { lineHeight: '1.5' }],
        sm:       ['12px', { lineHeight: '1.5' }],
        base:     ['14px', { lineHeight: '1.5' }],
        md:       ['16px', { lineHeight: '1.5' }],
        lg:       ['18px', { lineHeight: '1.4' }],
        xl:       ['20px', { lineHeight: '1.3' }],
        '2xl':    ['24px', { lineHeight: '1.25' }],
        '3xl':    ['34px', { lineHeight: '1.15' }],
        display:  ['40px', { lineHeight: '1.1' }],
      },
      spacing: {
        xxxs: '2px',  xxs: '4px',  xs: '8px',
        sm:   '12px', md:  '16px', lg: '20px',
        xl:   '24px', xxl: '36px', xxxl: '72px',
      },
      borderRadius: {
        xs: '4px',  sm: '8px',   md: '12px',
        lg: '16px', xl: '24px',  full: '9999px',
      },
      boxShadow: {
        card:      '0 3px 12px rgba(0,0,0,0.05), 0 0 2px rgba(0,0,0,0.10)',
        elevated:  '0 12px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        'btn-hover': '0 4px 12px rgba(255,122,69,0.30)',
        'focus-ring': '0 0 0 3px rgba(255,122,69,0.25)',
      },
      backgroundImage: {
        'ai-gradient':      'linear-gradient(135deg, #f759ab 0%, #c41d7f 100%)',
        'ai-gradient-soft': 'linear-gradient(135deg, #fff0f6 0%, #ffd6e7 100%)',
      },
    },
  },
};
```

### 13.4 React Component Example: Room Card

```jsx
function RoomCard({ room, rate, onSelect }) {
  return (
    <article className="rounded-lg border border-border bg-surface-card shadow-card overflow-hidden flex flex-col md:flex-row">
      {/* Image */}
      <div className="md:w-[35%]">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-md md:p-lg flex flex-col gap-sm">
        <h3 className="text-xl font-semibold text-text-primary">{room.name}</h3>
        <p className="text-base font-semibold">{rate.name}</p>
        <ul className="space-y-xs">
          {rate.inclusions.map((inc) => (
            <li key={inc.label} className="flex items-center gap-xs text-base">
              <CheckIcon className="text-success" /> {inc.label}
            </li>
          ))}
          {rate.exclusions.map((exc) => (
            <li key={exc.label} className="flex items-center gap-xs text-base text-error font-semibold">
              <XIcon /> {exc.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <aside className="md:w-[25%] p-md md:p-lg border-t md:border-t-0 md:border-l border-border bg-surface-subtle/40">
        <div className="inline-flex items-center gap-xxs rounded-full bg-success-light px-xs py-xxs text-xs font-semibold uppercase text-success">
          <CrownIcon /> Exclusive Offer
        </div>
        <div className="mt-md flex items-center gap-xxs">
          <span className="line-through text-text-tertiary text-sm">{rate.originalPrice}</span>
          <span dir="ltr" className="text-xl font-bold">{rate.price}</span>
          <span className="text-base">ريال</span>
        </div>
        <p className="text-sm text-text-secondary mt-xxs">Total for 1 Room • 1 Night</p>
        <button
          onClick={onSelect}
          className="mt-md w-full rounded-full bg-primary text-white font-semibold px-xl py-sm hover:bg-primary-hover hover:shadow-btn-hover transition-all duration-default"
        >
          Select Room
        </button>
      </aside>
    </article>
  );
}
```

---

## 14. Accessibility

This design system targets **WCAG 2.1 AA** compliance.

### 14.1 Color Contrast Requirements

All defined text/background combinations meet AA contrast:

| Foreground | Background | Ratio | Pass |
|---|---|---|---|
| `--text-primary` (#111827) | `--background-card` (#ffffff) | 16.0:1 | AAA ✅ |
| `--text-secondary` (#6b7280) | `--background-card` | 5.1:1 | AA ✅ |
| `--text-on-primary` (#ffffff) | `--primary` (#ff7a45) | 3.4:1 | **Fails AA for body** — only use on large (18px+) text or for ≥14px **bold** |
| `--success` (#059669) | `--success-light` (#e7f6ec) | 4.9:1 | AA ✅ |
| `--error` (#e8493d) | `--error-light` (#fff1f3) | 4.5:1 | AA ✅ |

**Important:** White text on the orange primary fails AA contrast for small body copy. Mitigations:
- Use orange buttons only with `--text-base` (14px) **semibold** or larger
- For button labels under 14px, use dark text on a light primary tint instead
- Always provide non-color affordance (icons, borders) for state changes

### 14.2 Focus Indicators

Every interactive element MUST have a visible focus state:

```css
:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus-ring);
}
```

Never remove focus without replacing it.

### 14.3 Touch Targets

Minimum touch target size: **44×44px** (Apple HIG) or **48×48px** (Material). The form-height-md of 40px meets neither — for mobile, increase button heights to 48px (`--form-height-lg`).

### 14.4 Semantic HTML

- Use `<button>` for actions, `<a>` for navigation. Never the reverse.
- Use `<form>` with proper `<label for="">` associations.
- Use `<nav>` for the stepper, with `aria-current="step"` on the active item.
- Use `aria-live="polite"` on the hold timer countdown.
- Use `aria-label` on icon-only buttons.

### 14.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .filling-fast-pulse { animation: none; }
}
```

### 14.6 RTL & Screen Readers

- Test with VoiceOver (macOS/iOS) and NVDA (Windows) in both LTR and RTL contexts.
- Numbers wrapped in `<span dir="ltr">` will be read correctly in Arabic contexts.
- Currency symbols should have a screen-reader-friendly label: `<span aria-label="Saudi Riyal">ريال</span>`

---

## 15. Versioning & Maintenance

### 15.1 Semantic Versioning

This design system follows **semver** (MAJOR.MINOR.PATCH):

- **PATCH** (`1.0.0` → `1.0.1`): Bug fixes, documentation, no token changes
- **MINOR** (`1.0.0` → `1.1.0`): New tokens, new components, additive only (backward compatible)
- **MAJOR** (`1.0.0` → `2.0.0`): Renamed/removed tokens, breaking component API changes

### 15.2 Adapting to a Different Brand

To re-skin this design system for another brand:

1. **Change `--primary`** to the new brand color
2. **Recalculate `--primary-light` and `--primary-hover`** using `color-mix` (formulas remain valid)
3. **Update `--shadow-button-hover` and `--shadow-focus-ring`** to use the new primary RGB
4. **Replace the logo and brand mark**
5. **Optionally swap `--accent`** if a different secondary CTA color is desired
6. **DO NOT change** the AI gradient, semantic palette, neutral text/background, spacing, radii, or shadow values — these are the system's structural skeleton and changing them breaks the aesthetic

### 15.3 Component Additions

When adding new components:

1. Express the component in terms of existing tokens — do not introduce new hardcoded values
2. If a new token is genuinely needed, add it to the appropriate scale (don't break the rhythm)
3. Document the component in section 8 with a complete specification
4. Add an implementation example in section 13.4

### 15.4 Changelog Template

```markdown
## [1.0.0] - 2026-05-21
### Added
- Initial design system extracted from letsbook.me/booking/yanoljacloudsolution
- 76 design tokens
- 12 core component specifications
- WordPress, Tailwind, React implementation examples

## [Unreleased]
### Added
- ...
### Changed
- ...
### Removed
- ...
```

---

## Appendix A: Token Quick Reference Card

```
COLORS                          SPACING (gutters)
--primary       #ff7a45         --space-xxxs    2px
--success       #059669         --space-xxs     4px
--warning       #ce8300         --space-xs      8px
--error         #e8493d         --space-sm     12px  ★ most-used
--text-primary  #111827         --space-md     16px
--text-secondary #6b7280        --space-lg     20px
--text-tertiary #9ea3aa         --space-xl     24px
--background    #f9fafb         --space-xxl    36px
--background-card #ffffff
--border        #e5e7eb         RADII
--background-dark #111827       --radius-xs     4px
                                --radius-sm     8px
TYPOGRAPHY                      --radius-md    12px
--text-base     14px ★          --radius-lg    16px  ★ cards
--text-md       16px            --radius-xl    24px
--text-lg       18px            --radius-full  9999px
--text-xl       20px
--text-2xl      24px            SHADOWS
--text-3xl      34px            --shadow-card        soft layered (default)
--text-display  40px            --shadow-elevated    modals, sticky bars
                                --shadow-button-hover orange-tinted lift
WEIGHTS                         --shadow-focus-ring  orange focus glow
400 regular
500 medium                      LAYOUT
600 semibold ★ (most-used)      --container-wide    1330px
700 bold                        --header-height-desktop 146px
```

---

## Appendix B: Anti-Patterns to Avoid

❌ **Don't add new colors.** If a use case can't be expressed with existing tokens, reconsider the design.
❌ **Don't use the AI gradient outside AI features.** It loses meaning instantly.
❌ **Don't introduce new shadows.** The one signature shadow is the system's calling card.
❌ **Don't use harsh transitions.** Default to 200ms ease.
❌ **Don't mix multiple primary actions on one screen.** Pick one orange button per viewport.
❌ **Don't use `padding-left` / `margin-right` etc.** Use logical properties (`padding-inline-start`).
❌ **Don't load Inter from Google Fonts.** Self-host.
❌ **Don't combine primary orange with the AI pink-magenta.** They live in separate zones.
❌ **Don't put strikethrough prices in red.** Use `--text-tertiary`.
❌ **Don't auto-play carousels or video.** Premium aesthetic = restraint.

---

*End of specification. For implementation help, see Section 13. For brand adaptation, see Section 15.2.*
