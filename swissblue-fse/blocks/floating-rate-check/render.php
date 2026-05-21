<?php
/**
 * Render — swissblue/floating-rate-check.
 *
 * Persistent floating Rate Check button (DESIGN_SYSTEM §8.9). Pinned to the
 * inline-start bottom corner; mirrors in RTL via logical properties (§11.3).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$label = isset( $attributes['label'] ) ? (string) $attributes['label'] : '';
$url   = isset( $attributes['url'] ) ? (string) $attributes['url'] : '';
$badge = isset( $attributes['badgeText'] ) ? (string) $attributes['badgeText'] : '';

if ( '' === $label ) {
	$label = __( 'Rate Check', 'swissblue-fse' );
}
?>
<a <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-rate-check' ) ); ?> href="<?php echo esc_url( '' !== $url ? $url : '#' ); ?>">
	<?php if ( '' !== $badge ) : ?>
		<span class="swissblue-rate-check__badge"><?php echo esc_html( $badge ); ?></span>
	<?php endif; ?>
	<svg class="swissblue-rate-check__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
		<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
		<path d="M8.5 12.5l2.5 2.5 4.5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
	<span class="swissblue-rate-check__label"><?php echo esc_html( $label ); ?></span>
</a>
