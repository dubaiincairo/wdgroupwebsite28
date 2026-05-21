<?php
/**
 * Render — swissblue/booking-sticky-bar.
 *
 * Fixed bottom price bar with an expandable breakdown (DESIGN_SYSTEM §8.8).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$total_label = isset( $attributes['totalLabel'] ) ? (string) $attributes['totalLabel'] : '';
$price       = isset( $attributes['price'] ) ? (string) $attributes['price'] : '';
$currency    = isset( $attributes['currency'] ) ? (string) $attributes['currency'] : 'SAR';
$cta_text    = isset( $attributes['ctaText'] ) ? (string) $attributes['ctaText'] : '';
$cta_url     = isset( $attributes['ctaUrl'] ) ? (string) $attributes['ctaUrl'] : '';
?>
<div <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-sticky-bar' ) ); ?>>
	<div class="swissblue-sticky-bar__inner">
		<button type="button" class="swissblue-sticky-bar__toggle" aria-expanded="false" aria-controls="swissblue-sticky-bar-panel" aria-label="<?php esc_attr_e( 'Toggle price breakdown', 'swissblue-fse' ); ?>">
			<svg class="swissblue-sticky-bar__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
				<path d="M6 15l6-6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>
		<div class="swissblue-sticky-bar__total">
			<?php if ( '' !== $total_label ) : ?>
				<span class="swissblue-sticky-bar__label"><?php echo esc_html( $total_label ); ?></span>
			<?php endif; ?>
			<span class="swissblue-sticky-bar__price">
				<span dir="ltr"><?php echo esc_html( $price ); ?></span>
				<?php if ( '' !== $currency ) : ?>
					<span class="swissblue-sticky-bar__currency"><?php echo esc_html( $currency ); ?></span>
				<?php endif; ?>
			</span>
		</div>
		<a class="swissblue-sticky-bar__cta" href="<?php echo esc_url( '' !== $cta_url ? $cta_url : '#' ); ?>">
			<span><?php echo esc_html( '' !== $cta_text ? $cta_text : __( 'Continue', 'swissblue-fse' ) ); ?></span>
			<svg class="swissblue-sticky-bar__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
				<path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</a>
	</div>
	<div class="swissblue-sticky-bar__panel" id="swissblue-sticky-bar-panel" hidden>
		<p class="swissblue-sticky-bar__panel-note"><?php esc_html_e( 'The price breakdown appears here during the booking flow.', 'swissblue-fse' ); ?></p>
	</div>
</div>
