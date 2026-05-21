<?php
/**
 * Render — swissblue/gallery-carousel.
 *
 * RTL-aware image carousel using native CSS scroll-snap. No auto-play
 * (DESIGN_SYSTEM §10.4); the scroll axis follows the document direction so
 * the carousel reads right-to-left in Arabic (§11.3).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$images = ( isset( $attributes['images'] ) && is_array( $attributes['images'] ) ) ? $attributes['images'] : array();

if ( empty( $images ) ) {
	return;
}
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-gallery' ) ); ?>>
	<ul class="swissblue-gallery__track">
		<?php foreach ( $images as $image ) : ?>
			<?php
			$url = isset( $image['url'] ) ? (string) $image['url'] : '';
			if ( '' === $url ) {
				continue;
			}
			$alt = isset( $image['alt'] ) ? (string) $image['alt'] : '';
			?>
			<li class="swissblue-gallery__slide">
				<img src="<?php echo esc_url( $url ); ?>" alt="<?php echo esc_attr( $alt ); ?>" loading="lazy" decoding="async" />
			</li>
		<?php endforeach; ?>
	</ul>
</div>
