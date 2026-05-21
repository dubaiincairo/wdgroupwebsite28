<?php
/**
 * SwissBlue FSE — custom post type registration.
 *
 * Registers the `property`, `room`, and `offer` post types (brief §6). Labels
 * are wrapped for translation; Arabic strings are supplied via the .po files
 * in languages/ — never hardcoded here. Polylang manages the translated
 * rewrite slugs (e.g. property → فندق).
 *
 * ACF field groups for these types are registered separately in Phase 3
 * (inc/acf-setup.php).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register all theme custom post types.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_post_types() {
	swissblue_register_property_cpt();
	swissblue_register_room_cpt();
	swissblue_register_offer_cpt();
}
add_action( 'init', 'swissblue_register_post_types' );

/**
 * Register the `property` post type — one entry per hotel.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_property_cpt() {
	$labels = array(
		'name'               => __( 'Properties', 'swissblue-fse' ),
		'singular_name'      => __( 'Property', 'swissblue-fse' ),
		'add_new'            => __( 'Add New', 'swissblue-fse' ),
		'add_new_item'       => __( 'Add New Property', 'swissblue-fse' ),
		'edit_item'          => __( 'Edit Property', 'swissblue-fse' ),
		'new_item'           => __( 'New Property', 'swissblue-fse' ),
		'view_item'          => __( 'View Property', 'swissblue-fse' ),
		'view_items'         => __( 'View Properties', 'swissblue-fse' ),
		'search_items'       => __( 'Search Properties', 'swissblue-fse' ),
		'not_found'          => __( 'No properties found.', 'swissblue-fse' ),
		'not_found_in_trash' => __( 'No properties found in Trash.', 'swissblue-fse' ),
		'all_items'          => __( 'All Properties', 'swissblue-fse' ),
		'archives'           => __( 'Property Archives', 'swissblue-fse' ),
		'attributes'         => __( 'Property Attributes', 'swissblue-fse' ),
		'menu_name'          => __( 'Properties', 'swissblue-fse' ),
		'name_admin_bar'     => __( 'Property', 'swissblue-fse' ),
		'item_published'     => __( 'Property published.', 'swissblue-fse' ),
		'item_updated'       => __( 'Property updated.', 'swissblue-fse' ),
	);

	register_post_type(
		'property',
		array(
			'labels'        => $labels,
			'description'   => __( 'Hotels within the SwissBlue Hospitality Group.', 'swissblue-fse' ),
			'public'        => true,
			'has_archive'   => true,
			'show_in_rest'  => true,
			'menu_icon'     => 'dashicons-building',
			'menu_position' => 20,
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'page-attributes' ),
			'rewrite'       => array(
				// Polylang manages the Arabic slug (فندق); 'property' is the English base.
				'slug'       => 'property',
				'with_front' => false,
			),
			'hierarchical'  => false,
		)
	);
}

/**
 * Register the `room` post type — room types belonging to a property.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_room_cpt() {
	$labels = array(
		'name'               => __( 'Rooms', 'swissblue-fse' ),
		'singular_name'      => __( 'Room', 'swissblue-fse' ),
		'add_new'            => __( 'Add New', 'swissblue-fse' ),
		'add_new_item'       => __( 'Add New Room', 'swissblue-fse' ),
		'edit_item'          => __( 'Edit Room', 'swissblue-fse' ),
		'new_item'           => __( 'New Room', 'swissblue-fse' ),
		'view_item'          => __( 'View Room', 'swissblue-fse' ),
		'view_items'         => __( 'View Rooms', 'swissblue-fse' ),
		'search_items'       => __( 'Search Rooms', 'swissblue-fse' ),
		'not_found'          => __( 'No rooms found.', 'swissblue-fse' ),
		'not_found_in_trash' => __( 'No rooms found in Trash.', 'swissblue-fse' ),
		'all_items'          => __( 'All Rooms', 'swissblue-fse' ),
		'archives'           => __( 'Room Archives', 'swissblue-fse' ),
		'menu_name'          => __( 'Rooms', 'swissblue-fse' ),
		'name_admin_bar'     => __( 'Room', 'swissblue-fse' ),
		'item_published'     => __( 'Room published.', 'swissblue-fse' ),
		'item_updated'       => __( 'Room updated.', 'swissblue-fse' ),
	);

	register_post_type(
		'room',
		array(
			'labels'        => $labels,
			'description'   => __( 'Room types offered by SwissBlue properties.', 'swissblue-fse' ),
			'public'        => true,
			'has_archive'   => false,
			'show_in_rest'  => true,
			'menu_icon'     => 'dashicons-admin-home',
			'menu_position' => 21,
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
			'rewrite'       => array(
				'slug'       => 'room',
				'with_front' => false,
			),
			'hierarchical'  => false,
		)
	);
}

/**
 * Register the `offer` post type — promotional packages.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_offer_cpt() {
	$labels = array(
		'name'               => __( 'Offers', 'swissblue-fse' ),
		'singular_name'      => __( 'Offer', 'swissblue-fse' ),
		'add_new'            => __( 'Add New', 'swissblue-fse' ),
		'add_new_item'       => __( 'Add New Offer', 'swissblue-fse' ),
		'edit_item'          => __( 'Edit Offer', 'swissblue-fse' ),
		'new_item'           => __( 'New Offer', 'swissblue-fse' ),
		'view_item'          => __( 'View Offer', 'swissblue-fse' ),
		'view_items'         => __( 'View Offers', 'swissblue-fse' ),
		'search_items'       => __( 'Search Offers', 'swissblue-fse' ),
		'not_found'          => __( 'No offers found.', 'swissblue-fse' ),
		'not_found_in_trash' => __( 'No offers found in Trash.', 'swissblue-fse' ),
		'all_items'          => __( 'All Offers', 'swissblue-fse' ),
		'archives'           => __( 'Offer Archives', 'swissblue-fse' ),
		'menu_name'          => __( 'Offers', 'swissblue-fse' ),
		'name_admin_bar'     => __( 'Offer', 'swissblue-fse' ),
		'item_published'     => __( 'Offer published.', 'swissblue-fse' ),
		'item_updated'       => __( 'Offer updated.', 'swissblue-fse' ),
	);

	register_post_type(
		'offer',
		array(
			'labels'        => $labels,
			'description'   => __( 'Promotional packages for SwissBlue properties.', 'swissblue-fse' ),
			'public'        => true,
			'has_archive'   => true,
			'show_in_rest'  => true,
			'menu_icon'     => 'dashicons-tag',
			'menu_position' => 22,
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
			'rewrite'       => array(
				'slug'       => 'offer',
				'with_front' => false,
			),
			'hierarchical'  => false,
		)
	);
}
