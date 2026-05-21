<?php
/**
 * Render — swissblue/property-hero.
 *
 * Full-width property hero with overlaid content (DESIGN_SYSTEM §8.1, §12.2).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$heading    = isset( $attributes['heading'] ) ? (string) $attributes['heading'] : '';
$subheading = isset( $attributes['subheading'] ) ? (string) $attributes['subheading'] : '';
$image_url  = isset( $attributes['imageUrl'] ) ? (string) $attributes['imageUrl'] : '';
$cta_text   = isset( $attributes['ctaText'] ) ? (string) $attributes['ctaText'] : '';
$cta_url    = isset( $attributes['ctaUrl'] ) ? (string) $attributes['ctaUrl'] : '';
?>
<section <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-property-hero' ) ); ?>>
	<div class="swissblue-property-hero__media"<?php if ( '' !== $image_url ) : ?> style="background-image:url(<?php echo esc_url( $image_url ); ?>)"<?php endif; ?>></div>
	<div class="swissblue-property-hero__overlay" aria-hidden="true"></div>
	<div class="swissblue-property-hero__content">
		<?php if ( '' !== $heading ) : ?>
			<h2 class="swissblue-property-hero__heading"><?php echo esc_html( $heading ); ?></h2>
		<?php endif; ?>
		<?php if ( '' !== $subheading ) : ?>
			<p class="swissblue-property-hero__subheading"><?php echo esc_html( $subheading ); ?></p>
		<?php endif; ?>
		<?php if ( '' !== $cta_text ) : ?>
			<a class="swissblue-property-hero__cta" href="<?php echo esc_url( '' !== $cta_url ? $cta_url : '#' ); ?>"><?php echo esc_html( $cta_text ); ?></a>
		<?php endif; ?>
	</div>
</section>
