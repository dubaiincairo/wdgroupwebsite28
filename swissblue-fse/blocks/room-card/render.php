<?php
/**
 * Render — swissblue/room-card.
 *
 * Room type card (DESIGN_SYSTEM §8.2). Horizontal split — image / content /
 * price sidebar — that stacks on mobile. Prices are wrapped in dir="ltr"
 * per §11.2 so digits are not reordered in RTL contexts.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$room_name      = isset( $attributes['roomName'] ) ? (string) $attributes['roomName'] : '';
$plan_name      = isset( $attributes['planName'] ) ? (string) $attributes['planName'] : '';
$image_url      = isset( $attributes['imageUrl'] ) ? (string) $attributes['imageUrl'] : '';
$inclusions_raw = isset( $attributes['inclusions'] ) ? (string) $attributes['inclusions'] : '';
$badge_text     = isset( $attributes['badgeText'] ) ? (string) $attributes['badgeText'] : '';
$discount_text  = isset( $attributes['discountText'] ) ? (string) $attributes['discountText'] : '';
$original_price = isset( $attributes['originalPrice'] ) ? (string) $attributes['originalPrice'] : '';
$price          = isset( $attributes['price'] ) ? (string) $attributes['price'] : '';
$currency       = isset( $attributes['currency'] ) ? (string) $attributes['currency'] : 'SAR';
$price_caption  = isset( $attributes['priceCaption'] ) ? (string) $attributes['priceCaption'] : '';
$taxes_text     = isset( $attributes['taxesText'] ) ? (string) $attributes['taxesText'] : '';
$select_text    = isset( $attributes['selectText'] ) ? (string) $attributes['selectText'] : '';
$select_url     = isset( $attributes['selectUrl'] ) ? (string) $attributes['selectUrl'] : '';

$inclusions = array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', $inclusions_raw ) ) );
?>
<article <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-room-card' ) ); ?>>
	<div class="swissblue-room-card__media">
		<?php if ( '' !== $image_url ) : ?>
			<img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $room_name ); ?>" loading="lazy" decoding="async" />
		<?php endif; ?>
	</div>

	<div class="swissblue-room-card__content">
		<?php if ( '' !== $room_name ) : ?>
			<h3 class="swissblue-room-card__name"><?php echo esc_html( $room_name ); ?></h3>
		<?php endif; ?>
		<?php if ( '' !== $plan_name ) : ?>
			<p class="swissblue-room-card__plan"><?php echo esc_html( $plan_name ); ?></p>
		<?php endif; ?>
		<?php if ( ! empty( $inclusions ) ) : ?>
			<ul class="swissblue-room-card__inclusions">
				<?php foreach ( $inclusions as $inclusion ) : ?>
					<li class="swissblue-room-card__inclusion">
						<svg class="swissblue-room-card__check" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
							<path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span><?php echo esc_html( $inclusion ); ?></span>
					</li>
				<?php endforeach; ?>
			</ul>
		<?php endif; ?>
	</div>

	<aside class="swissblue-room-card__price">
		<?php if ( '' !== $badge_text || '' !== $discount_text ) : ?>
			<div class="swissblue-room-card__tags">
				<?php if ( '' !== $badge_text ) : ?>
					<span class="swissblue-room-card__badge"><?php echo esc_html( $badge_text ); ?></span>
				<?php endif; ?>
				<?php if ( '' !== $discount_text ) : ?>
					<span class="swissblue-room-card__discount"><?php echo esc_html( $discount_text ); ?></span>
				<?php endif; ?>
			</div>
		<?php endif; ?>

		<div class="swissblue-room-card__pricing">
			<?php if ( '' !== $original_price ) : ?>
				<span class="swissblue-room-card__original" dir="ltr"><?php echo esc_html( $original_price ); ?></span>
			<?php endif; ?>
			<span class="swissblue-room-card__amount">
				<span dir="ltr"><?php echo esc_html( $price ); ?></span>
				<?php if ( '' !== $currency ) : ?>
					<span class="swissblue-room-card__currency"><?php echo esc_html( $currency ); ?></span>
				<?php endif; ?>
			</span>
		</div>

		<?php if ( '' !== $price_caption ) : ?>
			<p class="swissblue-room-card__caption"><?php echo esc_html( $price_caption ); ?></p>
		<?php endif; ?>
		<?php if ( '' !== $taxes_text ) : ?>
			<p class="swissblue-room-card__taxes"><?php echo esc_html( $taxes_text ); ?></p>
		<?php endif; ?>

		<a class="swissblue-room-card__select" href="<?php echo esc_url( '' !== $select_url ? $select_url : '#' ); ?>">
			<?php echo esc_html( '' !== $select_text ? $select_text : __( 'Select Room', 'swissblue-fse' ) ); ?>
		</a>
	</aside>
</article>
