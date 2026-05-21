<?php
/**
 * SwissBlue FSE — Yanolja Cloud (letsbook.me) booking bridge.
 *
 * Integration helpers for the eZee Absolute PMS booking flow, surfaced through
 * the Yanolja Cloud booking engine at letsbook.me. Implemented in Phase 5 —
 * Phase 1 provides function signatures and PHPDoc only.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Build the letsbook.me booking URL for a property and date range.
 *
 * Target shape:
 * https://letsbook.me/booking/{slug}?checkin=…&checkout=…&adults=…&children=…
 *
 * @since 0.1.0
 * @param int    $property_id Property post ID.
 * @param string $checkin     Check-in date, Y-m-d.
 * @param string $checkout    Check-out date, Y-m-d.
 * @param int    $adults      Number of adults.
 * @param int    $children    Number of children.
 * @return string Fully-qualified booking URL, or an empty string on failure.
 */
function swissblue_get_booking_url( $property_id, $checkin, $checkout, $adults = 2, $children = 0 ) {
	// TODO Phase 5: read letsbook_property_slug and assemble the query string.
	return '';
}

/**
 * Render the embedded letsbook.me booking widget for a property.
 *
 * Phase 5 will embed the Yanolja Cloud engine via a sandboxed iframe.
 *
 * @since 0.1.0
 * @param int $property_id Property post ID.
 * @return string Booking widget HTML, or an empty string.
 */
function swissblue_render_booking_widget( $property_id ) {
	// TODO Phase 5: output the sandboxed iframe embed.
	return '';
}

/**
 * Fetch a live rate estimate for a room and date range.
 *
 * Placeholder for a future REST call to the eZee FAS (Front-office API
 * Service). Display-only prices come from ACF (price_from_sar); real-time
 * rates come from the PMS.
 *
 * @since 0.1.0
 * @param int    $property_id Property post ID.
 * @param int    $room_id     Room post ID.
 * @param string $checkin     Check-in date, Y-m-d.
 * @param string $checkout    Check-out date, Y-m-d.
 * @return array Rate estimate data. Empty array until Phase 5.
 */
function swissblue_get_rate_estimate( $property_id, $room_id, $checkin, $checkout ) {
	// TODO Phase 5: call the eZee FAS API and normalise the response.
	return array();
}
