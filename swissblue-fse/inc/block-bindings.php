<?php
/**
 * SwissBlue FSE — Block Bindings API sources.
 *
 * The WordPress Block Bindings API (6.5+) connects ACF field data to core
 * blocks (paragraph, heading, image, button…) without writing custom block
 * code. Sources are registered in Phase 3.
 *
 * Planned binding sources (brief §8):
 *   - swissblue/property-name        → property title
 *   - swissblue/property-stars       → ★ × star_rating
 *   - swissblue/property-location    → location_city_{lang} + address_{lang}
 *   - swissblue/property-phone       → phone, formatted as click-to-call
 *   - swissblue/property-booking-url → constructed letsbook.me URL
 *   - swissblue/room-price-from      → "From {price_from_sar} SAR / night"
 *   - swissblue/room-capacity        → "{adults} Adults • {children} Children"
 *   - swissblue/offer-discount-badge → badge markup per badge_type (§8.4)
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register the theme's block binding sources.
 *
 * Implemented in Phase 3 with register_block_bindings_source() calls. Guarded
 * so the theme does not fatal on WordPress versions before 6.5.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_block_bindings() {
	if ( ! function_exists( 'register_block_bindings_source' ) ) {
		return;
	}

	// TODO Phase 3: register the eight binding sources listed above.
}
add_action( 'init', 'swissblue_register_block_bindings' );
