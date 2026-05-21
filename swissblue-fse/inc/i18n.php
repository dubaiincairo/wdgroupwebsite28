<?php
/**
 * SwissBlue FSE — multilingual (Polylang) integration.
 *
 * Polylang is assumed installed. The theme forces its custom post types and
 * the amenity taxonomy to be translatable so the multilingual structure ships
 * with the theme rather than depending on Polylang's settings screen.
 *
 * Default language: Arabic (ar_SA, RTL). Secondary: English (en_US, LTR).
 * RTL is handled entirely by the theme's logical-property CSS — no separate
 * language stylesheet is required.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Force the theme's custom post types to be translatable by Polylang.
 *
 * Returning the types only when not on the settings screen marks them as
 * translatable without exposing a (redundant) settings checkbox.
 *
 * @since 0.1.0
 * @param string[] $post_types  Translatable post types, keyed by name.
 * @param bool     $is_settings Whether the Polylang settings screen is shown.
 * @return string[] Filtered post types.
 */
function swissblue_polylang_post_types( $post_types, $is_settings ) {
	if ( $is_settings ) {
		return $post_types;
	}

	foreach ( array( 'property', 'room', 'offer' ) as $type ) {
		$post_types[ $type ] = $type;
	}

	return $post_types;
}
add_filter( 'pll_get_post_types', 'swissblue_polylang_post_types', 10, 2 );

/**
 * Force the amenity taxonomy to be translatable by Polylang.
 *
 * @since 0.1.0
 * @param string[] $taxonomies  Translatable taxonomies, keyed by name.
 * @param bool     $is_settings Whether the Polylang settings screen is shown.
 * @return string[] Filtered taxonomies.
 */
function swissblue_polylang_taxonomies( $taxonomies, $is_settings ) {
	if ( $is_settings ) {
		return $taxonomies;
	}

	$taxonomies['amenity'] = 'amenity';

	return $taxonomies;
}
add_filter( 'pll_get_taxonomies', 'swissblue_polylang_taxonomies', 10, 2 );
