<?php
/**
 * Render — swissblue/floating-ai-chat.
 *
 * Persistent floating AI concierge chat bubble (DESIGN_SYSTEM §8.9). Pinned
 * to the inline-end bottom corner; mirrors in RTL via logical properties.
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

if ( '' === $label ) {
	$label = __( 'AI Chat', 'swissblue-fse' );
}
?>
<a <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-ai-chat' ) ); ?> href="<?php echo esc_url( '' !== $url ? $url : '#' ); ?>" aria-label="<?php echo esc_attr( $label ); ?>">
	<svg class="swissblue-ai-chat__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
		<path d="M21 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-5.4A8 8 0 1 1 21 11.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 11h6M9 14h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
	</svg>
	<span class="swissblue-ai-chat__label"><?php echo esc_html( $label ); ?></span>
</a>
