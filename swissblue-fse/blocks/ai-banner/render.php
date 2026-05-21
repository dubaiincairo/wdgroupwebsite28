<?php
/**
 * Render — swissblue/ai-banner.
 *
 * AI-recommended banner using the reserved AI gradient (DESIGN_SYSTEM §8.6).
 * The pink-to-magenta gradient is used ONLY here — never with the brand
 * primary in the same component (§2.2, Anti-Patterns).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$title    = isset( $attributes['title'] ) ? (string) $attributes['title'] : '';
$subtitle = isset( $attributes['subtitle'] ) ? (string) $attributes['subtitle'] : '';
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-ai-banner' ) ); ?>>
	<span class="swissblue-ai-banner__icon" aria-hidden="true">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" focusable="false">
			<path d="M12 2l1.9 5.6L19.5 9l-5.6 1.4L12 16l-1.9-5.6L4.5 9l5.6-1.4z" />
		</svg>
	</span>
	<div class="swissblue-ai-banner__text">
		<?php if ( '' !== $title ) : ?>
			<p class="swissblue-ai-banner__title"><?php echo esc_html( $title ); ?></p>
		<?php endif; ?>
		<?php if ( '' !== $subtitle ) : ?>
			<p class="swissblue-ai-banner__subtitle"><?php echo esc_html( $subtitle ); ?></p>
		<?php endif; ?>
	</div>
</div>
