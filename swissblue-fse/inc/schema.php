<?php
/**
 * SwissBlue FSE — structured data (JSON-LD) for SEO.
 *
 * Phase 4 emits Hotel / LocalBusiness JSON-LD on single-property pages and
 * coordinates with RankMath (the chosen SEO plugin — never Yoast).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Build the Hotel JSON-LD graph for a property.
 *
 * Planned shape (Phase 4):
 *   {
 *     "@context": "https://schema.org",
 *     "@type": "Hotel",
 *     "name", "image", "description", "starRating",
 *     "address": { "@type": "PostalAddress", streetAddress, addressLocality,
 *                  addressRegion, addressCountry: "SA" },
 *     "geo": { "@type": "GeoCoordinates", latitude, longitude },
 *     "telephone",
 *     "priceRange",            // derived from the cheapest room price_from_sar
 *     "amenityFeature": [ LocationFeatureSpecification, … ],
 *     "containsPlace":  [ { "@type": "HotelRoom", … }, … ]
 *   }
 *
 * @since 0.1.0
 * @param int|null $property_id Property post ID. Defaults to the queried object.
 * @return array The JSON-LD graph as an associative array. Empty until Phase 4.
 */
function swissblue_hotel_schema( $property_id = null ) {
	// TODO Phase 4: assemble the Hotel schema from ACF data.
	return array();
}
