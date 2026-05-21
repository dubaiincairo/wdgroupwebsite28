<?php
/**
 * SwissBlue FSE — Advanced Custom Fields (ACF Pro) field groups.
 *
 * ACF Pro is assumed installed — this theme never bundles or installs it.
 * Field groups are registered in PHP (not the ACF admin UI) so they stay
 * version-controlled with the theme. Field definitions follow brief §6.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register all ACF field groups for the theme's custom post types.
 *
 * Guarded so the theme never fatals when ACF Pro is inactive.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_acf_field_groups() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	swissblue_acf_property_group();
	swissblue_acf_room_group();
	swissblue_acf_offer_group();
}
add_action( 'acf/init', 'swissblue_register_acf_field_groups' );

/**
 * Register the "Property Details" field group (brief §6.1).
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_acf_property_group() {
	acf_add_local_field_group(
		array(
			'key'      => 'group_swissblue_property',
			'title'    => __( 'Property Details', 'swissblue-fse' ),
			'location' => array(
				array(
					array(
						'param'    => 'post_type',
						'operator' => '==',
						'value'    => 'property',
					),
				),
			),
			'fields'   => array(
				array(
					'key'          => 'field_swissblue_property_ezee_hotel_code',
					'label'        => __( 'eZee hotel code', 'swissblue-fse' ),
					'name'         => 'ezee_hotel_code',
					'type'         => 'text',
					'required'     => 1,
					'instructions' => __( 'PMS identifier — links this property to eZee Absolute.', 'swissblue-fse' ),
				),
				array(
					'key'          => 'field_swissblue_property_letsbook_slug',
					'label'        => __( 'letsbook.me property slug', 'swissblue-fse' ),
					'name'         => 'letsbook_property_slug',
					'type'         => 'text',
					'instructions' => __( 'Used to build the Yanolja Cloud booking URL.', 'swissblue-fse' ),
				),
				array(
					'key'   => 'field_swissblue_property_city_ar',
					'label' => __( 'City (Arabic)', 'swissblue-fse' ),
					'name'  => 'location_city_ar',
					'type'  => 'text',
				),
				array(
					'key'   => 'field_swissblue_property_city_en',
					'label' => __( 'City (English)', 'swissblue-fse' ),
					'name'  => 'location_city_en',
					'type'  => 'text',
				),
				array(
					'key'   => 'field_swissblue_property_address_ar',
					'label' => __( 'Address (Arabic)', 'swissblue-fse' ),
					'name'  => 'location_address_ar',
					'type'  => 'textarea',
					'rows'  => 3,
				),
				array(
					'key'   => 'field_swissblue_property_address_en',
					'label' => __( 'Address (English)', 'swissblue-fse' ),
					'name'  => 'location_address_en',
					'type'  => 'textarea',
					'rows'  => 3,
				),
				array(
					'key'   => 'field_swissblue_property_phone',
					'label' => __( 'Phone', 'swissblue-fse' ),
					'name'  => 'phone',
					'type'  => 'text',
				),
				array(
					'key'   => 'field_swissblue_property_whatsapp',
					'label' => __( 'WhatsApp', 'swissblue-fse' ),
					'name'  => 'whatsapp',
					'type'  => 'text',
				),
				array(
					'key'   => 'field_swissblue_property_email',
					'label' => __( 'Email', 'swissblue-fse' ),
					'name'  => 'email',
					'type'  => 'email',
				),
				array(
					'key'   => 'field_swissblue_property_latitude',
					'label' => __( 'Latitude', 'swissblue-fse' ),
					'name'  => 'latitude',
					'type'  => 'number',
					'step'  => 'any',
				),
				array(
					'key'   => 'field_swissblue_property_longitude',
					'label' => __( 'Longitude', 'swissblue-fse' ),
					'name'  => 'longitude',
					'type'  => 'number',
					'step'  => 'any',
				),
				array(
					'key'   => 'field_swissblue_property_star_rating',
					'label' => __( 'Star rating', 'swissblue-fse' ),
					'name'  => 'star_rating',
					'type'  => 'number',
					'min'   => 1,
					'max'   => 5,
				),
				array(
					'key'   => 'field_swissblue_property_hero_gallery',
					'label' => __( 'Hero gallery', 'swissblue-fse' ),
					'name'  => 'hero_gallery',
					'type'  => 'gallery',
				),
				array(
					'key'        => 'field_swissblue_property_amenities',
					'label'      => __( 'Amenities', 'swissblue-fse' ),
					'name'       => 'amenities',
					'type'       => 'taxonomy',
					'taxonomy'   => 'amenity',
					'field_type' => 'multi_select',
					'add_term'   => 0,
					'save_terms' => 1,
					'load_terms' => 1,
				),
				array(
					'key'   => 'field_swissblue_property_commercial_registration',
					'label' => __( 'Commercial registration', 'swissblue-fse' ),
					'name'  => 'commercial_registration',
					'type'  => 'text',
				),
				array(
					'key'          => 'field_swissblue_property_zatca_id',
					'label'        => __( 'ZATCA ID', 'swissblue-fse' ),
					'name'         => 'zatca_id',
					'type'         => 'text',
					'instructions' => __( 'ZATCA Phase 2 e-invoicing identifier.', 'swissblue-fse' ),
				),
			),
		)
	);
}

/**
 * Register the "Room Details" field group (brief §6.2).
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_acf_room_group() {
	acf_add_local_field_group(
		array(
			'key'      => 'group_swissblue_room',
			'title'    => __( 'Room Details', 'swissblue-fse' ),
			'location' => array(
				array(
					array(
						'param'    => 'post_type',
						'operator' => '==',
						'value'    => 'room',
					),
				),
			),
			'fields'   => array(
				array(
					'key'           => 'field_swissblue_room_property',
					'label'         => __( 'Property', 'swissblue-fse' ),
					'name'          => 'property',
					'type'          => 'post_object',
					'post_type'     => array( 'property' ),
					'required'      => 1,
					'return_format' => 'id',
				),
				array(
					'key'   => 'field_swissblue_room_ezee_room_code',
					'label' => __( 'eZee room code', 'swissblue-fse' ),
					'name'  => 'ezee_room_code',
					'type'  => 'text',
				),
				array(
					'key'   => 'field_swissblue_room_capacity_adults',
					'label' => __( 'Capacity — adults', 'swissblue-fse' ),
					'name'  => 'capacity_adults',
					'type'  => 'number',
					'min'   => 0,
				),
				array(
					'key'   => 'field_swissblue_room_capacity_children',
					'label' => __( 'Capacity — children', 'swissblue-fse' ),
					'name'  => 'capacity_children',
					'type'  => 'number',
					'min'   => 0,
				),
				array(
					'key'   => 'field_swissblue_room_size_sqm',
					'label' => __( 'Size (m²)', 'swissblue-fse' ),
					'name'  => 'size_sqm',
					'type'  => 'number',
					'min'   => 0,
				),
				array(
					'key'   => 'field_swissblue_room_bed_config_ar',
					'label' => __( 'Bed configuration (Arabic)', 'swissblue-fse' ),
					'name'  => 'bed_config_ar',
					'type'  => 'text',
				),
				array(
					'key'   => 'field_swissblue_room_bed_config_en',
					'label' => __( 'Bed configuration (English)', 'swissblue-fse' ),
					'name'  => 'bed_config_en',
					'type'  => 'text',
				),
				array(
					'key'     => 'field_swissblue_room_view',
					'label'   => __( 'Room view', 'swissblue-fse' ),
					'name'    => 'room_view',
					'type'    => 'select',
					'choices' => array(
						'city'     => __( 'City', 'swissblue-fse' ),
						'sea'      => __( 'Sea', 'swissblue-fse' ),
						'mountain' => __( 'Mountain', 'swissblue-fse' ),
						'garden'   => __( 'Garden', 'swissblue-fse' ),
						'pool'     => __( 'Pool', 'swissblue-fse' ),
					),
				),
				array(
					'key'          => 'field_swissblue_room_price_from_sar',
					'label'        => __( 'Price from (SAR)', 'swissblue-fse' ),
					'name'         => 'price_from_sar',
					'type'         => 'number',
					'min'          => 0,
					'instructions' => __( 'Display only — live rates come from the PMS.', 'swissblue-fse' ),
				),
				array(
					'key'        => 'field_swissblue_room_amenities',
					'label'      => __( 'Amenities', 'swissblue-fse' ),
					'name'       => 'amenities',
					'type'       => 'taxonomy',
					'taxonomy'   => 'amenity',
					'field_type' => 'multi_select',
					'add_term'   => 0,
					'save_terms' => 1,
					'load_terms' => 1,
				),
				array(
					'key'   => 'field_swissblue_room_gallery',
					'label' => __( 'Gallery', 'swissblue-fse' ),
					'name'  => 'gallery',
					'type'  => 'gallery',
				),
			),
		)
	);
}

/**
 * Register the "Offer Details" field group (brief §6.3).
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_acf_offer_group() {
	acf_add_local_field_group(
		array(
			'key'      => 'group_swissblue_offer',
			'title'    => __( 'Offer Details', 'swissblue-fse' ),
			'location' => array(
				array(
					array(
						'param'    => 'post_type',
						'operator' => '==',
						'value'    => 'offer',
					),
				),
			),
			'fields'   => array(
				array(
					'key'           => 'field_swissblue_offer_property',
					'label'         => __( 'Properties', 'swissblue-fse' ),
					'name'          => 'property',
					'type'          => 'post_object',
					'post_type'     => array( 'property' ),
					'multiple'      => 1,
					'return_format' => 'id',
				),
				array(
					'key'            => 'field_swissblue_offer_valid_from',
					'label'          => __( 'Valid from', 'swissblue-fse' ),
					'name'           => 'valid_from',
					'type'           => 'date_picker',
					'display_format' => 'Y-m-d',
					'return_format'  => 'Y-m-d',
				),
				array(
					'key'            => 'field_swissblue_offer_valid_to',
					'label'          => __( 'Valid to', 'swissblue-fse' ),
					'name'           => 'valid_to',
					'type'           => 'date_picker',
					'display_format' => 'Y-m-d',
					'return_format'  => 'Y-m-d',
				),
				array(
					'key'   => 'field_swissblue_offer_discount_pct',
					'label' => __( 'Discount (%)', 'swissblue-fse' ),
					'name'  => 'discount_pct',
					'type'  => 'number',
					'min'   => 0,
					'max'   => 100,
				),
				array(
					'key'   => 'field_swissblue_offer_discount_label_ar',
					'label' => __( 'Discount label (Arabic)', 'swissblue-fse' ),
					'name'  => 'discount_label_ar',
					'type'  => 'text',
				),
				array(
					'key'   => 'field_swissblue_offer_discount_label_en',
					'label' => __( 'Discount label (English)', 'swissblue-fse' ),
					'name'  => 'discount_label_en',
					'type'  => 'text',
				),
				array(
					'key'     => 'field_swissblue_offer_badge_type',
					'label'   => __( 'Badge type', 'swissblue-fse' ),
					'name'    => 'badge_type',
					'type'    => 'select',
					'choices' => array(
						'exclusive'    => __( 'Exclusive Offer', 'swissblue-fse' ),
						'best_seller'  => __( 'Best Seller', 'swissblue-fse' ),
						'filling_fast' => __( 'Filling Fast', 'swissblue-fse' ),
						'new'          => __( 'New', 'swissblue-fse' ),
					),
				),
				array(
					'key'          => 'field_swissblue_offer_terms_ar',
					'label'        => __( 'Terms (Arabic)', 'swissblue-fse' ),
					'name'         => 'terms_ar',
					'type'         => 'wysiwyg',
					'tabs'         => 'all',
					'media_upload' => 0,
				),
				array(
					'key'          => 'field_swissblue_offer_terms_en',
					'label'        => __( 'Terms (English)', 'swissblue-fse' ),
					'name'         => 'terms_en',
					'type'         => 'wysiwyg',
					'tabs'         => 'all',
					'media_upload' => 0,
				),
			),
		)
	);
}
