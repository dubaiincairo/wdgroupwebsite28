# Self-hosted Inter fonts

Inter is **self-hosted** — never loaded from the Google Fonts CDN
(DESIGN_SYSTEM.md §3.1, project rule §11).

Drop the following WOFF2 files into this directory. The `@font-face`
declarations in [`../css/tokens.css`](../css/tokens.css) and the preload
hints in [`../../inc/enqueue.php`](../../inc/enqueue.php) reference these
exact filenames:

| File | Subset | unicode-range |
|---|---|---|
| `inter-latin.woff2`  | Latin  | `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC` |
| `inter-arabic.woff2` | Arabic | `U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF` |

Latin Extended (`inter-latin-ext.woff2`) is recommended and Cyrillic is
optional (DESIGN_SYSTEM §3.1). Weight-specific files — or a subset of the
Inter variable font — are finalised in **Phase 6 (font optimisation)**.

Source: <https://github.com/rsms/inter> — SIL Open Font License 1.1.
