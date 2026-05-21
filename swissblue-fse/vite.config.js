/**
 * Vite build configuration for SwissBlue FSE.
 *
 * Two entries (Phase 1 spec §12.14):
 *   assets/css/tailwind.css  ->  dist/css/tailwind.min.css
 *   assets/js/main.js        ->  dist/js/main.min.js
 *
 * Tailwind CSS v4 runs through PostCSS, configured inline below, so no
 * separate postcss.config.js file is needed.
 *
 * Note: a CSS-only Rollup entry also emits a small empty companion JS chunk
 * (dist/js/tailwind.min.js) — harmless build artefact, refined in Phase 6.
 */
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssMinify: true,
    rollupOptions: {
      input: {
        tailwind: 'assets/css/tailwind.css',
        main: 'assets/js/main.js',
      },
      output: {
        entryFileNames: 'js/[name].min.js',
        chunkFileNames: 'js/[name].min.js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (name.endsWith('.css')) {
            return 'css/[name].min.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
