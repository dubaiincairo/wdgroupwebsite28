<?php
/**
 * SwissBlue FSE — Advanced Custom Fields (ACF Pro) field groups.
 *
 * Phase 3 deliverable. ACF Pro is assumed installed — this theme never bundles
 * or installs it. Field groups are registered in PHP (not the ACF admin UI) so
 * they stay version-controlled with the theme.
 *
 * Planned field groups (brief §6):
 *   - Property Details : ezee_hotel_code, letsbook_property_slug,
 *     location_city_{ar,en}, location_address_{ar,en}, phone, whatsapp, email,
 *     latitude, longitude, star_rating, hero_gallery, amenities,
 *     commercial_registration, zatca_id
 *   - Room Details     : property, ezee_room_code, capacity_adults,
 *     capacity_children, size_sqm, bed_config_{ar,en}, room_view,
 *     price_from_sar, amenities, gallery
 *   - Offer Details    : property, valid_from, valid_to, discount_pct,
 *     discount_label_{ar,en}, badge_type, terms_{ar,en}
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register ACF field groups for the theme's custom post types.
 *
 * Implemented in Phase 3. Guarded so the theme does not fatal when ACF Pro is
 * inactive.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_acf_field_groups() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	// TODO Phase 3: register the Property, Room, and Offer field groups.
}
add_action( 'acf/init', 'swissblue_register_acf_field_groups' );
