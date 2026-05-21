<?php
/**
 * Render — swissblue/add-on-card.
 *
 * Vertical add-on card, image on top (DESIGN_SYSTEM §8.2 — Add-On Card).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$title       = isset( $attributes['title'] ) ? (string) $attributes['title'] : '';
$image_url   = isset( $attributes['imageUrl'] ) ? (string) $attributes['imageUrl'] : '';
$details_url = isset( $attributes['detailsUrl'] ) ? (string) $attributes['detailsUrl'] : '';
$price_label = isset( $attributes['priceLabel'] ) ? (string) $attributes['priceLabel'] : '';
$price       = isset( $attributes['price'] ) ? (string) $attributes['price'] : '';
$currency    = isset( $attributes['currency'] ) ? (string) $attributes['currency'] : 'SAR';
$select_text = isset( $attributes['selectText'] ) ? (string) $attributes['selectText'] : '';
$select_url  = isset( $attributes['selectUrl'] ) ? (string) $attributes['selectUrl'] : '';
?>
<article <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-add-on-card' ) ); ?>>
	<div class="swissblue-add-on-card__media">
		<?php if ( '' !== $image_url ) : ?>
			<img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $title ); ?>" loading="lazy" decoding="async" />
		<?php endif; ?>
	</div>
	<div class="swissblue-add-on-card__body">
		<?php if ( '' !== $title ) : ?>
			<h3 class="swissblue-add-on-card__title"><?php echo esc_html( $title ); ?></h3>
		<?php endif; ?>
		<?php if ( '' !== $details_url ) : ?>
			<a class="swissblue-add-on-card__details" href="<?php echo esc_url( $details_url ); ?>">
				<span><?php esc_html_e( 'Details', 'swissblue-fse' ); ?></span>
				<svg class="swissblue-add-on-card__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
					<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		<?php endif; ?>
		<div class="swissblue-add-on-card__footer">
			<div class="swissblue-add-on-card__pricing">
				<?php if ( '' !== $price_label ) : ?>
					<span class="swissblue-add-on-card__price-label"><?php echo esc_html( $price_label ); ?></span>
				<?php endif; ?>
				<span class="swissblue-add-on-card__price">
					<span dir="ltr"><?php echo esc_html( $price ); ?></span>
					<?php if ( '' !== $currency ) : ?>
						<span class="swissblue-add-on-card__currency"><?php echo esc_html( $currency ); ?></span>
					<?php endif; ?>
				</span>
			</div>
			<a class="swissblue-add-on-card__select" href="<?php echo esc_url( '' !== $select_url ? $select_url : '#' ); ?>">
				<?php echo esc_html( '' !== $select_text ? $select_text : __( 'Add', 'swissblue-fse' ) ); ?>
			</a>
		</div>
	</div>
</article>
