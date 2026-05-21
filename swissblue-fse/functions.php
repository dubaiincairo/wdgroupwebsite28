<?php
/**
 * SwissBlue FSE — theme bootstrap.
 *
 * Loads the modular includes in inc/ and registers theme supports. This file
 * intentionally contains no business logic; each concern lives in its own
 * inc/ file.
 *
 * DESIGN_SYSTEM.md (BNY-CSDS) is the single source of truth for design tokens.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Theme version — kept in sync with the style.css header.
 *
 * @since 0.1.0
 */
define( 'SWISSBLUE_FSE_VERSION', '0.1.0' );

/**
 * Load every PHP module in the inc/ directory.
 *
 * Order matters: helpers load first so later modules can rely on them.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_load_includes() {
	$modules = array(
		'helpers',
		'enqueue',
		'post-types',
		'taxonomies',
		'acf-setup',
		'block-bindings',
		'blocks',
		'booking-bridge',
		'schema',
	);

	foreach ( $modules as $module ) {
		$path = get_theme_file_path( "inc/{$module}.php" );

		if ( is_readable( $path ) ) {
			require_once $path;
		}
	}
}
swissblue_load_includes();

/**
 * Register theme supports for the FSE block theme.
 *
 * Note: "custom spacing" and "custom units" are FSE concerns controlled
 * through theme.json (settings.spacing.customSpacingSize / settings.spacing.units)
 * — they are not add_theme_support() flags and are configured in Phase 2.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_theme_supports() {
	// Full-Site-Editing block templates.
	add_theme_support( 'block-templates' );

	// Editor styles — load the compiled stylesheet inside the block editor.
	add_theme_support( 'editor-styles' );
	add_editor_style( 'dist/css/tailwind.min.css' );

	// Custom logo (flexible sizing; final SwissBlue logo supplied in Phase 2).
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 48,
			'width'       => 180,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	// HTML5 markup for core features.
	add_theme_support(
		'html5',
		array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' )
	);

	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );

	// Translations — Arabic (ar_SA) is the default locale.
	load_theme_textdomain( 'swissblue-fse', get_theme_file_path( 'languages' ) );
}
add_action( 'after_setup_theme', 'swissblue_theme_supports' );
