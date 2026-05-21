<?php
/**
 * SwissBlue FSE — asset registration and enqueueing.
 *
 * Registers the self-hosted Inter font preloads, the design-token stylesheet,
 * the compiled Tailwind CSS, and the compiled front-end JavaScript.
 *
 * Inter is self-hosted (DESIGN_SYSTEM §3.1) and is NEVER loaded from the
 * Google Fonts CDN. The @font-face declarations live in assets/css/tokens.css;
 * drop the WOFF2 files into assets/fonts/ (see assets/fonts/README.md).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue front-end styles and scripts.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_enqueue_assets() {
	$version = defined( 'SWISSBLUE_FSE_VERSION' ) ? SWISSBLUE_FSE_VERSION : false;

	// Design tokens + self-hosted @font-face (raw, hand-authored CSS).
	wp_enqueue_style(
		'swissblue-tokens',
		get_theme_file_uri( 'assets/css/tokens.css' ),
		array(),
		$version
	);

	// Compiled Tailwind utilities + component CSS (built by `npm run build`).
	wp_enqueue_style(
		'swissblue-tailwind',
		get_theme_file_uri( 'dist/css/tailwind.min.css' ),
		array( 'swissblue-tokens' ),
		$version
	);

	// Compiled front-end JavaScript.
	wp_enqueue_script(
		'swissblue-main',
		get_theme_file_uri( 'dist/js/main.min.js' ),
		array(),
		$version,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'swissblue_enqueue_assets' );

/**
 * Enqueue the design-token stylesheet inside the block editor.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_enqueue_editor_assets() {
	$version = defined( 'SWISSBLUE_FSE_VERSION' ) ? SWISSBLUE_FSE_VERSION : false;

	wp_enqueue_style(
		'swissblue-tokens-editor',
		get_theme_file_uri( 'assets/css/tokens.css' ),
		array(),
		$version
	);
}
add_action( 'enqueue_block_editor_assets', 'swissblue_enqueue_editor_assets' );

/**
 * Preload the self-hosted Inter WOFF2 subsets for faster first paint.
 *
 * Files are expected in assets/fonts/ (DESIGN_SYSTEM §3.1 and §11.4). The
 * matching @font-face rules are declared in assets/css/tokens.css.
 *
 * @since 0.1.0
 * @return void
 */
function swissblue_preload_fonts() {
	$fonts = array( 'inter-latin.woff2', 'inter-arabic.woff2' );

	foreach ( $fonts as $font ) {
		$uri = get_theme_file_uri( 'assets/fonts/' . $font );
		printf(
			'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
			esc_url( $uri )
		);
	}
}
add_action( 'wp_head', 'swissblue_preload_fonts', 1 );
