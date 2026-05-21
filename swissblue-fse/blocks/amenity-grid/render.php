<?php
/**
 * Render — swissblue/amenity-grid.
 *
 * Responsive grid of amenity icons and labels (DESIGN_SYSTEM §9, §7.4).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$heading  = isset( $attributes['heading'] ) ? (string) $attributes['heading'] : '';
$raw      = isset( $attributes['items'] ) ? (string) $attributes['items'] : '';
$amenities = array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', $raw ) ) );
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-amenity-grid' ) ); ?>>
	<?php if ( '' !== $heading ) : ?>
		<h2 class="swissblue-amenity-grid__heading"><?php echo esc_html( $heading ); ?></h2>
	<?php endif; ?>
	<?php if ( ! empty( $amenities ) ) : ?>
		<ul class="swissblue-amenity-grid__list">
			<?php foreach ( $amenities as $amenity ) : ?>
				<li class="swissblue-amenity-grid__item">
					<svg class="swissblue-amenity-grid__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
						<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
						<path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span class="swissblue-amenity-grid__label"><?php echo esc_html( $amenity ); ?></span>
				</li>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</div>
