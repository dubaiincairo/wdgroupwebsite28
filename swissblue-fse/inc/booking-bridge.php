<?php
/**
 * SwissBlue FSE — Yanolja Cloud (letsbook.me) booking bridge.
 *
 * Connects the theme to the eZee Absolute PMS booking flow, surfaced through
 * the Yanolja Cloud booking engine at letsbook.me.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Build the letsbook.me booking URL for a property and date range.
 *
 * Shape: https://letsbook.me/booking/{slug}?checkin=…&checkout=…&adults=…&children=…
 * The slug comes from the property's `letsbook_property_slug` ACF field.
 *
 * @since 0.1.0
 * @param int    $property_id Property post ID.
 * @param string $checkin     Check-in date, Y-m-d (optional).
 * @param string $checkout    Check-out date, Y-m-d (optional).
 * @param int    $adults      Number of adults.
 * @param int    $children    Number of children.
 * @return string Fully-qualified booking URL, or an empty string on failure.
 */
function swissblue_get_booking_url( $property_id, $checkin = '', $checkout = '', $adults = 2, $children = 0 ) {
	if ( ! $property_id || ! function_exists( 'get_field' ) ) {
		return '';
	}

	$slug = get_field( 'letsbook_property_slug', $property_id );
	if ( ! is_string( $slug ) || '' === trim( $slug ) ) {
		return '';
	}

	$base = 'https://letsbook.me/booking/' . rawurlencode( trim( $slug ) );
	$args = array();

	if ( '' !== $checkin ) {
		$args['checkin'] = sanitize_text_field( $checkin );
	}
	if ( '' !== $checkout ) {
		$args['checkout'] = sanitize_text_field( $checkout );
	}
	$args['adults']   = max( 1, (int) $adults );
	$args['children'] = max( 0, (int) $children );

	return esc_url_raw( add_query_arg( $args, $base ) );
}

/**
 * Render the embedded letsbook.me booking widget for a property.
 *
 * @since 0.1.0
 * @param int $property_id Property post ID.
 * @return string Booking widget HTML, or an empty string.
 */
function swissblue_render_booking_widget( $property_id ) {
	$url = swissblue_get_booking_url( $property_id );
	if ( '' === $url ) {
		return '';
	}

	return sprintf(
		'<div class="swissblue-booking-widget"><iframe src="%1$s" title="%2$s" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" style="width:100%%;min-height:640px;border:0;border-radius:var(--radius-lg)"></iframe></div>',
		esc_url( $url ),
		esc_attr__( 'Book your stay', 'swissblue-fse' )
	);
}

/**
 * Shortcode `[swissblue_booking]` — embeds the booking widget.
 *
 * Defaults to the queried property when no property_id is supplied.
 *
 * @since 0.1.0
 * @param array|string $atts Shortcode attributes.
 * @return string Booking widget HTML, or an empty string.
 */
function swissblue_booking_shortcode( $atts ) {
	$atts = shortcode_atts( array( 'property_id' => 0 ), $atts, 'swissblue_booking' );

	$property_id = (int) $atts['property_id'];
	if ( ! $property_id ) {
		$property_id = get_queried_object_id();
	}

	return swissblue_render_booking_widget( $property_id );
}
add_shortcode( 'swissblue_booking', 'swissblue_booking_shortcode' );

/**
 * Fetch a live rate estimate for a room and date range.
 *
 * Stub for a future REST call to the eZee FAS (Front-office API Service).
 * Display-only prices come from ACF (price_from_sar); real-time rates will
 * come from the PMS. Planned return shape:
 *   array(
 *     'currency'  => 'SAR',
 *     'total'     => 0.00,
 *     'nightly'   => array(),
 *     'available' => true,
 *   )
 *
 * @since 0.1.0
 * @param int    $property_id Property post ID.
 * @param int    $room_id     Room post ID.
 * @param string $checkin     Check-in date, Y-m-d.
 * @param string $checkout    Check-out date, Y-m-d.
 * @return array Rate estimate data. Empty array until the eZee FAS integration lands.
 */
function swissblue_get_rate_estimate( $property_id, $room_id, $checkin, $checkout ) {
	// TODO: call the eZee FAS API and normalise the response.
	return array();
}
