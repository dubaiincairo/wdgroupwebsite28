<?php
/**
 * SwissBlue FSE — Block Bindings API sources.
 *
 * The WordPress Block Bindings API (6.5+) connects ACF field data to core
 * blocks (paragraph, heading, image, button…) without custom block code.
 * Each source resolves its post from the block's `postId` context, falling
 * back to the queried object.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Resolve the post ID for a binding callback.
 *
 * @since 0.1.0
 * @param WP_Block|null $block The block instance.
 * @return int Post ID, or 0 if undetermined.
 */
function swissblue_binding_post_id( $block ) {
	if ( $block instanceof WP_Block && isset( $block->context['postId'] ) ) {
		return (int) $block->context['postId'];
	}

	return (int) get_the_ID();
}

/**
 * Binding — property title.
 *
 * @since 0.1.0
 * @param array         $source_args Source arguments.
 * @param WP_Block|null $block       Block instance.
 * @return string Property title, or an empty string.
 */
function swissblue_bind_property_name( $source_args, $block ) {
	$post_id = swissblue_binding_post_id( $block );

	return $post_id ? get_the_title( $post_id ) : '';
}

/**
 * Binding — property star rating as star characters.
 *
 * @since 0.1.0
 * @param array         $source_args Source arguments.
 * @param WP_Block|null $block       Block instance.
 * @return string Star characters, or an empty string.
 */
function swissblue_bind_property_stars( $source_args, $block ) {
	$post_id = swissblue_binding_post_id( $block );
	if ( ! $post_id || ! function_exists( 'get_field' ) ) {
		return '';
	}

	return swissblue_star_rating_markup( (int) get_field( 'star_rating', $post_id ) );
}

/**
 * Binding — property location (localised city and address).
 *
 * @since 0.1.0
 * @param array         $source_args Source arguments.
 * @param WP_Block|null $block       Block instance.
 * @return string Localised location string, or an empty string.
 */
function swissblue_bind_property_location( $source_args, $block ) {
	$post_id = swissblue_binding_post_id( $block );
	if ( ! $post_id ) {
		return '';
	}

	$parts = array_filter(
		array(
			swissblue_get_localized_field( $post_id, 'location_city' ),
			swissblue_get_localized_field( $post_id, 'location_address' ),
		)
	);

	return implode( ' — ', $parts );
}

/**
 * Binding — property phone number.
 *
 * @since 0.1.0
 * @param array         $source_args Source arguments.
 * @param WP_Block|null $block       Block instance.
 * @return string Phone number, or an empty string.
 */
function swissblue_bind_property_phone( $source_args, $block ) {
	$post_id = swissblue_binding_post_id( $block );
	if ( ! $post_id || ! function_exists( 'get_field' ) ) {
		return '';
	}

	$phone = get_field( 'phone', $post_id );

	return is_string( $phone ) ? $phone : '';
}

/**
 * Binding — constructed letsbook.me booking URL.
 *
 * Delegates to swissblue_get_booking_url() (implemented in Phase 5).
 *
 * @since 0.1.0
 * @param array         $source_args Source arguments.
 * @param WP_Block|null $block       Block instance.
 * @return string Booking URL, or an empty string.
 */
function swissblue_bind_property_booking_url( $source_args, $block ) {
	$post_id = swissblue_binding_post_id( $block );
	if ( ! $post_id || ! function_exists( 'swissblue_get_booking_url' ) ) {
		return '';
	}

	return (string) swissblue_get_booking_url( $post_id, '', '', 2, 0 );
}

/**
 * Binding — room "From {price} SAR / night".
 *
 * @since 0.1.0
 * @param array         $source_args Source arguments.
 * @param WP_Block|null $block       Block instance.
 * @return string Price line, or an empty string.
 */
function swissblue_bind_room_price_from( $source_args, $block ) {
	$post_id = swissblue_binding_post_id( $block );
	if ( ! $post_id || ! function_exists( 'get_field' ) ) {
		return '';
	}

	$price = get_field( 'price_from_sar', $post_id );
	if ( null === $price || '' === $price ) {
		return '';
	}

	/* translators: %s: price amount in Saudi Riyal. */
	return sprintf( __( 'From %s SAR / night', 'swissblue-fse' ), (string) $price );
}

/**
 * Binding — room "{adults} Adults • {children} Children".
 *
 * @since 0.1.0
 * @param array         $source_args Source arguments.
 * @param WP_Block|null $block       Block instance.
 * @return string Capacity line, or an empty string.
 */
function swissblue_bind_room_capacity( $source_args, $block ) {
	$post_id = swissblue_binding_post_id( $block );
	if ( ! $post_id || ! function_exists( 'get_field' ) ) {
		return '';
	}

	$adults   = (int) get_field( 'capacity_adults', $post_id );
	$children = (int) get_field( 'capacity_children', $post_id );

	/* translators: 1: number of adults, 2: number of children. */
	return sprintf( __( '%1$d Adults • %2$d Children', 'swissblue-fse' ), $adults, $children );
}

/**
 * Binding — offer discount badge label, per badge_type (§8.4).
 *
 * @since 0.1.0
 * @param array         $source_args Source arguments.
 * @param WP_Block|null $block       Block instance.
 * @return string Badge label, or an empty string.
 */
function swissblue_bind_offer_discount_badge( $source_args, $block ) {
	$post_id = swissblue_binding_post_id( $block );
	if ( ! $post_id || ! function_exists( 'get_field' ) ) {
		return '';
	}

	$type   = get_field( 'badge_type', $post_id );
	$labels = array(
		'exclusive'    => __( 'Exclusive Offer', 'swissblue-fse' ),
		'best_seller'  => __( 'Best Seller', 'swissblue-fse' ),
		'filling_fast' => __( 'Filling Fast', 'swissblue-fse' ),
		'new'          => __( 'New', 'swissblue-fse' ),
	);

	return isset( $labels[ $type ] ) ? $labels[ $type ] : '';
}

/**
 * Register the theme's block binding sources.
 *
 * Guarded so the theme does not fatal on WordPress versions before 6.5.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_block_bindings() {
	if ( ! function_exists( 'register_block_bindings_source' ) ) {
		return;
	}

	$sources = array(
		'swissblue/property-name'        => array( __( 'SwissBlue: Property name', 'swissblue-fse' ), 'swissblue_bind_property_name' ),
		'swissblue/property-stars'       => array( __( 'SwissBlue: Property star rating', 'swissblue-fse' ), 'swissblue_bind_property_stars' ),
		'swissblue/property-location'    => array( __( 'SwissBlue: Property location', 'swissblue-fse' ), 'swissblue_bind_property_location' ),
		'swissblue/property-phone'       => array( __( 'SwissBlue: Property phone', 'swissblue-fse' ), 'swissblue_bind_property_phone' ),
		'swissblue/property-booking-url' => array( __( 'SwissBlue: Property booking URL', 'swissblue-fse' ), 'swissblue_bind_property_booking_url' ),
		'swissblue/room-price-from'      => array( __( 'SwissBlue: Room price from', 'swissblue-fse' ), 'swissblue_bind_room_price_from' ),
		'swissblue/room-capacity'        => array( __( 'SwissBlue: Room capacity', 'swissblue-fse' ), 'swissblue_bind_room_capacity' ),
		'swissblue/offer-discount-badge' => array( __( 'SwissBlue: Offer discount badge', 'swissblue-fse' ), 'swissblue_bind_offer_discount_badge' ),
	);

	foreach ( $sources as $name => $config ) {
		register_block_bindings_source(
			$name,
			array(
				'label'              => $config[0],
				'get_value_callback' => $config[1],
				'uses_context'       => array( 'postId' ),
			)
		);
	}
}
add_action( 'init', 'swissblue_register_block_bindings' );
