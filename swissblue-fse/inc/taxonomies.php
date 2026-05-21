<?php
/**
 * SwissBlue FSE — custom taxonomy registration.
 *
 * Registers the hierarchical `amenity` taxonomy, shared by the `property` and
 * `room` post types. Hierarchy lets editors group terms (e.g. "Property
 * Amenities" vs "Room Amenities") under parent terms (brief §6.4).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register the `amenity` taxonomy.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_taxonomies() {
	$labels = array(
		'name'              => __( 'Amenities', 'swissblue-fse' ),
		'singular_name'     => __( 'Amenity', 'swissblue-fse' ),
		'search_items'      => __( 'Search Amenities', 'swissblue-fse' ),
		'all_items'         => __( 'All Amenities', 'swissblue-fse' ),
		'parent_item'       => __( 'Parent Amenity Group', 'swissblue-fse' ),
		'parent_item_colon' => __( 'Parent Amenity Group:', 'swissblue-fse' ),
		'edit_item'         => __( 'Edit Amenity', 'swissblue-fse' ),
		'update_item'       => __( 'Update Amenity', 'swissblue-fse' ),
		'add_new_item'      => __( 'Add New Amenity', 'swissblue-fse' ),
		'new_item_name'     => __( 'New Amenity Name', 'swissblue-fse' ),
		'menu_name'         => __( 'Amenities', 'swissblue-fse' ),
		'not_found'         => __( 'No amenities found.', 'swissblue-fse' ),
		'back_to_items'     => __( '← Back to Amenities', 'swissblue-fse' ),
	);

	register_taxonomy(
		'amenity',
		array( 'property', 'room' ),
		array(
			'labels'            => $labels,
			'description'       => __( 'Facilities and services offered by properties and rooms.', 'swissblue-fse' ),
			'hierarchical'      => true,
			'public'            => true,
			'show_in_rest'      => true,
			'show_admin_column' => true,
			'show_tagcloud'     => false,
			'rewrite'           => array(
				'slug'       => 'amenity',
				'with_front' => false,
			),
		)
	);
}
add_action( 'init', 'swissblue_register_taxonomies' );
