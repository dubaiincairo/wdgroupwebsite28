<?php
/**
 * SwissBlue FSE — structured data (JSON-LD) for SEO.
 *
 * Emits Hotel JSON-LD on single-property pages. When RankMath is active the
 * graph is added through the rank_math/json_ld filter so the site has a
 * single, coordinated schema output; otherwise it is printed in wp_head.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Get the room post IDs that belong to a property.
 *
 * @since 0.1.0
 * @param int $property_id Property post ID.
 * @return int[] Room post IDs.
 */
function swissblue_get_property_rooms( $property_id ) {
	$rooms = get_posts(
		array(
			'post_type'      => 'room',
			'posts_per_page' => 50,
			'fields'         => 'ids',
			'no_found_rows'  => true,
			'meta_query'     => array(  // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
				array(
					'key'   => 'property',
					'value' => $property_id,
				),
			),
		)
	);

	return is_array( $rooms ) ? array_map( 'intval', $rooms ) : array();
}

/**
 * Build the Hotel JSON-LD graph for a property.
 *
 * Returns the Hotel object WITHOUT an @context key so it can be embedded in a
 * larger @graph; the standalone printer adds @context.
 *
 * @since 0.1.0
 * @param int|null $property_id Property post ID. Defaults to the queried object.
 * @return array The Hotel schema, or an empty array.
 */
function swissblue_hotel_schema( $property_id = null ) {
	if ( ! $property_id ) {
		$property_id = get_queried_object_id();
	}
	if ( ! $property_id || 'property' !== get_post_type( $property_id ) ) {
		return array();
	}

	$schema = array(
		'@type' => 'Hotel',
		'name'  => get_the_title( $property_id ),
		'url'   => get_permalink( $property_id ),
	);

	$description = get_the_excerpt( $property_id );
	if ( $description ) {
		$schema['description'] = wp_strip_all_tags( $description );
	}

	$image = get_the_post_thumbnail_url( $property_id, 'large' );
	if ( $image ) {
		$schema['image'] = $image;
	}

	if ( function_exists( 'get_field' ) ) {
		$stars = (int) get_field( 'star_rating', $property_id );
		if ( $stars > 0 ) {
			$schema['starRating'] = array(
				'@type'       => 'Rating',
				'ratingValue' => $stars,
			);
		}

		$phone = get_field( 'phone', $property_id );
		if ( is_string( $phone ) && '' !== $phone ) {
			$schema['telephone'] = $phone;
		}

		$city    = swissblue_get_localized_field( $property_id, 'location_city' );
		$address = swissblue_get_localized_field( $property_id, 'location_address' );
		if ( '' !== $city || '' !== $address ) {
			$schema['address'] = array(
				'@type'          => 'PostalAddress',
				'addressCountry' => 'SA',
			);
			if ( '' !== $address ) {
				$schema['address']['streetAddress'] = $address;
			}
			if ( '' !== $city ) {
				$schema['address']['addressLocality'] = $city;
			}
		}

		$latitude  = get_field( 'latitude', $property_id );
		$longitude = get_field( 'longitude', $property_id );
		if ( $latitude && $longitude ) {
			$schema['geo'] = array(
				'@type'     => 'GeoCoordinates',
				'latitude'  => (float) $latitude,
				'longitude' => (float) $longitude,
			);
		}
	}

	$amenities = wp_get_post_terms( $property_id, 'amenity', array( 'fields' => 'names' ) );
	if ( is_array( $amenities ) && ! empty( $amenities ) ) {
		$schema['amenityFeature'] = array();
		foreach ( $amenities as $amenity ) {
			$schema['amenityFeature'][] = array(
				'@type' => 'LocationFeatureSpecification',
				'name'  => $amenity,
			);
		}
	}

	$rooms  = swissblue_get_property_rooms( $property_id );
	$prices = array();
	if ( ! empty( $rooms ) ) {
		$schema['containsPlace'] = array();
		foreach ( $rooms as $room_id ) {
			$schema['containsPlace'][] = array(
				'@type' => 'HotelRoom',
				'name'  => get_the_title( $room_id ),
				'url'   => get_permalink( $room_id ),
			);
			if ( function_exists( 'get_field' ) ) {
				$price = get_field( 'price_from_sar', $room_id );
				if ( is_numeric( $price ) && $price > 0 ) {
					$prices[] = (float) $price;
				}
			}
		}
	}
	if ( ! empty( $prices ) ) {
		$min = min( $prices );
		$max = max( $prices );
		$schema['priceRange'] = ( $min === $max ) ? 'SAR ' . $min : 'SAR ' . $min . '–' . $max;
	}

	return $schema;
}

/**
 * Print the Hotel JSON-LD in wp_head when RankMath is not managing schema.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_print_hotel_schema() {
	if ( ! is_singular( 'property' ) || defined( 'RANK_MATH_VERSION' ) ) {
		return;
	}

	$schema = swissblue_hotel_schema();
	if ( empty( $schema ) ) {
		return;
	}

	$graph = array_merge( array( '@context' => 'https://schema.org' ), $schema );
	echo "\n" . '<script type="application/ld+json">' . wp_json_encode( $graph ) . '</script>' . "\n";
}
add_action( 'wp_head', 'swissblue_print_hotel_schema' );

/**
 * Add the Hotel schema to RankMath's JSON-LD graph.
 *
 * @since 0.1.0
 * @param array $data The RankMath JSON-LD pieces.
 * @return array Filtered data.
 */
function swissblue_rank_math_hotel_schema( $data ) {
	if ( is_singular( 'property' ) ) {
		$schema = swissblue_hotel_schema();
		if ( ! empty( $schema ) ) {
			$data['swissblueHotel'] = $schema;
		}
	}

	return $data;
}
add_filter( 'rank_math/json_ld', 'swissblue_rank_math_hotel_schema', 20, 1 );
