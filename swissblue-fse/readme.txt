=== SwissBlue FSE ===

Contributors:      swissblue
Requires at least: 7.0
Tested up to:      7.0
Requires PHP:      8.3
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
Tags:              full-site-editing, block-patterns, rtl-language-support, accessibility-ready

Custom WordPress 7.0 Full-Site-Editing block theme for SwissBlue Hospitality Group.

== Description ==

SwissBlue FSE is a bespoke FSE block theme for SwissBlue Hospitality Group, a
multi-property luxury hospitality brand in Saudi Arabia. It implements the
"Brand New Yanolja Cloud Solution Design System" (BNY-CSDS) documented in
DESIGN_SYSTEM.md, which is the single source of truth for every design token.

The default language is Arabic (ar_SA, RTL); English (en_US, LTR) is secondary.

== Installation ==

1. Run `npm install` then `npm run build` to compile assets into dist/.
2. ZIP the swissblue-fse/ folder and upload via Appearance > Themes > Add New.
3. Required plugins (assumed installed, not bundled): ACF Pro, Polylang, RankMath.

== Changelog ==

= 0.1.0 =
* Initial release of the SwissBlue FSE theme (Phases 1-6).
* Theme scaffold, build tooling (Vite + Tailwind v4), and BNY-CSDS design
  tokens; theme.json with the SwissBlue brand palette.
* Custom post types (property, room, offer) and the amenity taxonomy.
* Ten custom blocks, ACF Pro field groups, and Block Bindings sources.
* All block templates and template parts.
* Hotel JSON-LD schema, RankMath and Polylang integration.
* letsbook.me booking bridge and the [swissblue_booking] shortcode.
