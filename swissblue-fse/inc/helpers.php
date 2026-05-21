<?php
/**
 * SwissBlue FSE — shared helper utilities.
 *
 * Small, reusable functions used across the theme (blocks, bindings, schema).
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
 * @return string Two-letter language code.
 */
function swissblue_get_current_lang() {
	if ( function_exists( 'pll_current_language' ) ) {
		$lang = pll_current_language( 'slug' );
		if ( is_string( $lang ) && '' !== $lang ) {
			return $lang;
		}
	}

	return substr( get_locale(), 0, 2 );
}

/**
 * Get a language-specific ACF field value.
 *
 * Reads `{base_key}_ar` or `{base_key}_en` for the active language, falling
 * back to the other language so a value is always shown when one exists.
 *
 * @since 0.1.0
 * @param int    $post_id  Post ID to read the field from.
 * @param string $base_key Field key without the `_ar` / `_en` suffix.
 * @return string The localised field value, or an empty string.
 */
function swissblue_get_localized_field( $post_id, $base_key ) {
	if ( ! function_exists( 'get_field' ) ) {
		return '';
	}

	$is_arabic = ( 'ar' === swissblue_get_current_lang() );
	$primary   = $base_key . ( $is_arabic ? '_ar' : '_en' );
	$fallback  = $base_key . ( $is_arabic ? '_en' : '_ar' );

	$value = get_field( $primary, $post_id );
	if ( ! is_string( $value ) || '' === $value ) {
		$value = get_field( $fallback, $post_id );
	}

	return is_string( $value ) ? $value : '';
}

/**
 * Format a monetary amount for mixed RTL/LTR display.
 *
 * Wraps the numeric part in `<span dir="ltr">` per DESIGN_SYSTEM §11.2 so the
 * bidirectional algorithm does not reorder the digits.
 *
 * @since 0.1.0
 * @param float|int|string $amount   The numeric amount.
 * @param string           $currency Currency label (e.g. 'SAR', 'ريال').
 * @return string Escaped HTML markup for the price, or an empty string.
 */
function swissblue_format_price( $amount, $currency = 'SAR' ) {
	if ( null === $amount || '' === $amount ) {
		return '';
	}

	return '<span class="swissblue-price">'
		. '<span dir="ltr">' . esc_html( (string) $amount ) . '</span> '
		. esc_html( $currency )
		. '</span>';
}

/**
 * Build the star-rating string for a property.
 *
 * Returns filled/empty star characters (DESIGN_SYSTEM §8.2). Callers that
 * render this for sighted users should pair it with an accessible label.
 *
 * @since 0.1.0
 * @param int $rating Whole-star rating, 0–5.
 * @return string Star characters, e.g. "★★★★☆".
 */
function swissblue_star_rating_markup( $rating ) {
	$rating = max( 0, min( 5, (int) $rating ) );

	return str_repeat( '★', $rating ) . str_repeat( '☆', 5 - $rating );
}

/**
 * Resolve a theme asset URI under the assets/ directory.
 *
 * @since 0.1.0
 * @param string $relative_path Path relative to the assets/ directory.
 * @return string Fully-qualified asset URL.
 */
function swissblue_asset_uri( $relative_path ) {
	return get_theme_file_uri( 'assets/' . ltrim( $relative_path, '/' ) );
}
