<?php
/**
 * SwissBlue FSE — shared helper utilities.
 *
 * Small, reusable functions used across the theme. Bodies are intentionally
 * left as stubs in Phase 1; each is implemented in the phase noted in its
 * inline TODO.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Get the current content language code (e.g. 'ar', 'en').
 *
 * Resolves the active Polylang language, falling back to the WordPress locale.
 *
 * @since 0.1.0
 * @return string Two-letter language code, or an empty string if undetermined.
 */
function swissblue_get_current_lang() {
	// TODO Phase 4: integrate with pll_current_language(), fall back to get_locale().
}

/**
 * Get a language-specific ACF field value.
 *
 * Selects `{base_key}_ar` or `{base_key}_en` based on the current language
 * (brief §6 stores localised strings in suffixed fields).
 *
 * @since 0.1.0
 * @param int    $post_id  Post ID to read the field from.
 * @param string $base_key Field key without the `_ar` / `_en` suffix.
 * @return string The localised field value, or an empty string.
 */
function swissblue_get_localized_field( $post_id, $base_key ) {
	// TODO Phase 3: read the suffixed ACF field for the active language.
}

/**
 * Format a monetary amount for mixed RTL/LTR display.
 *
 * Wraps the numeric part in `<span dir="ltr">` per DESIGN_SYSTEM §11.2 so the
 * bidirectional algorithm does not reorder the digits.
 *
 * @since 0.1.0
 * @param float|int $amount   The numeric amount.
 * @param string    $currency Currency label (e.g. 'SAR', 'ريال').
 * @return string Escaped HTML markup for the price.
 */
function swissblue_format_price( $amount, $currency = 'SAR' ) {
	// TODO Phase 3: build the dir="ltr"-wrapped, escaped price markup.
}

/**
 * Build the star-rating markup for a property.
 *
 * @since 0.1.0
 * @param int $rating Whole-star rating, 1–5.
 * @return string Escaped HTML star row with an accessible label.
 */
function swissblue_star_rating_markup( $rating ) {
	// TODO Phase 3: render ★ × rating with an aria-label, per DESIGN_SYSTEM §8.2.
}

/**
 * Resolve a theme asset URI under the assets/ directory.
 *
 * @since 0.1.0
 * @param string $relative_path Path relative to the assets/ directory.
 * @return string Fully-qualified asset URL.
 */
function swissblue_asset_uri( $relative_path ) {
	// TODO Phase 2: return get_theme_file_uri( 'assets/' . ltrim( $relative_path, '/' ) ).
}
