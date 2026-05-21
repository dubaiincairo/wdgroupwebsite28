/**
 * Tailwind CSS v4 configuration for SwissBlue FSE.
 *
 * Mirrors DESIGN_SYSTEM.md §13.3. Loaded by the Tailwind entry
 * assets/css/tailwind.css via the `@config` directive.
 *
 * The primary colour intentionally points at the CSS custom property
 * `var(--primary)` (defined in assets/css/tokens.css) so the palette
 * auto-syncs the moment the SwissBlue brand hex is supplied in Phase 2.
 */
export default {
  content: [
    './**/*.php',
    './**/*.html',
    './patterns/**/*.php',
    './blocks/**/*.{js,jsx,json}',
    './assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary — resolved from the CSS variable (see tokens.css).
        primary: {
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
          hover: 'var(--primary-hover)',
        },
        accent: '#6d28d9',
        success: { DEFAULT: '#059669', light: '#e7f6ec' },
        warning: { DEFAULT: '#ce8300', light: '#fff6db' },
        error: { DEFAULT: '#e8493d', light: '#fff1f3' },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
          tertiary: '#9ea3aa',
        },
        surface: {
          DEFAULT: '#f9fafb',
          card: '#ffffff',
          subtle: '#f3f6f9',
          promo: '#fff7ec',
          dark: '#111827',
        },
        border: {
          DEFAULT: '#e5e7eb',
          form: '#dce0e6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['10px', { lineHeight: '1.5' }],
        sm: ['12px', { lineHeight: '1.5' }],
        base: ['14px', { lineHeight: '1.5' }],
        md: ['16px', { lineHeight: '1.5' }],
        lg: ['18px', { lineHeight: '1.4' }],
        xl: ['20px', { lineHeight: '1.3' }],
        '2xl': ['24px', { lineHeight: '1.25' }],
        '3xl': ['34px', { lineHeight: '1.15' }],
        display: ['40px', { lineHeight: '1.1' }],
      },
      spacing: {
        xxxs: '2px',
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        xxl: '36px',
        xxxl: '72px',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      boxShadow: {
        // The orange-tinted shadows below are the BNY-CSDS source values
        // (§13.3). Per DESIGN_SYSTEM §15.2 they are re-derived from the
        // SwissBlue brand RGB in Phase 2.
        card: '0 3px 12px rgba(0,0,0,0.05), 0 0 2px rgba(0,0,0,0.10)',
        elevated: '0 12px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        'btn-hover': '0 4px 12px rgba(255,122,69,0.30)',
        'focus-ring': '0 0 0 3px rgba(255,122,69,0.25)',
      },
      backgroundImage: {
        // Reserved for AI features only (DESIGN_SYSTEM §2.2).
        'ai-gradient': 'linear-gradient(135deg, #f759ab 0%, #c41d7f 100%)',
        'ai-gradient-soft': 'linear-gradient(135deg, #fff0f6 0%, #ffd6e7 100%)',
      },
    },
  },
};
