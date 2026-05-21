<?php
/**
 * SwissBlue FSE — custom block registration.
 *
 * Registers the theme's dynamic blocks (block.json + render.php). Each block's
 * editor script is registered with explicit WordPress dependencies so the
 * blocks work without a JavaScript build step; the editor preview is handled
 * by the core ServerSideRender component.
 *
 * Phase 2 blocks: property-hero (§8.1), room-card (§8.2), booking-sticky-bar
 * (§8.8). The remaining seven blocks are implemented in Phase 3.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * The slugs of every block folder in blocks/ (each contains a block.json).
 *
 * @since 0.1.0
 * @return string[] Block directory slugs.
 */
function swissblue_block_slugs() {
	return array(
		'property-hero',
		'room-card',
		'booking-sticky-bar',
		'add-on-card',
		'amenity-grid',
		'progress-stepper',
		'ai-banner',
		'floating-rate-check',
		'floating-ai-chat',
		'gallery-carousel',
	);
}

/**
 * Add the "SwissBlue" category to the block inserter.
 *
 * @since 0.1.0
 * @param array $categories Registered block categories.
 * @return array Filtered categories with the SwissBlue group prepended.
 */
function swissblue_block_category( $categories ) {
	return array_merge(
		array(
			array(
				'slug'  => 'swissblue',
				'title' => __( 'SwissBlue', 'swissblue-fse' ),
				'icon'  => null,
			),
		),
		$categories
	);
}
add_filter( 'block_categories_all', 'swissblue_block_category' );

/**
 * Register the theme's dynamic blocks.
 *
 * Each block's editor script is registered first — with its wp-* dependencies —
 * so block.json can reference it by handle and no build step is required.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_register_blocks() {
	$blocks  = swissblue_block_slugs();
	$version = defined( 'SWISSBLUE_FSE_VERSION' ) ? SWISSBLUE_FSE_VERSION : false;
	$deps    = array(
		'wp-blocks',
		'wp-element',
		'wp-block-editor',
		'wp-components',
		'wp-i18n',
		'wp-server-side-render',
	);

	foreach ( $blocks as $block ) {
		wp_register_script(
			"swissblue-{$block}-editor",
			get_theme_file_uri( "blocks/{$block}/index.js" ),
			$deps,
			$version,
			true
		);

		register_block_type( get_theme_file_path( "blocks/{$block}" ) );
	}
}
add_action( 'init', 'swissblue_register_blocks' );

/**
 * Make the editor scripts translation-ready.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_set_block_script_translations() {
	foreach ( swissblue_block_slugs() as $block ) {
		wp_set_script_translations( "swissblue-{$block}-editor", 'swissblue-fse', get_theme_file_path( 'languages' ) );
	}
}
add_action( 'init', 'swissblue_set_block_script_translations' );
