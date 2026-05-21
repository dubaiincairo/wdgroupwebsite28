<?php
/**
 * Title: Booking CTA
 * Slug: swissblue-fse/booking-cta
 * Categories: call-to-action
 * Description: Primary booking call-to-action block. Phase 3 build per DESIGN_SYSTEM §8.1 (Primary Button).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

?>
<!-- wp:group {"className":"swissblue-booking-cta","layout":{"type":"constrained"}} -->
<div class="wp-block-group swissblue-booking-cta">
	<!-- wp:heading {"level":2} -->
	<h2><?php echo esc_html__( 'Ready to book your stay?', 'swissblue-fse' ); ?></h2>
	<!-- /wp:heading -->
	<!-- wp:buttons -->
	<div class="wp-block-buttons">
		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html__( 'Check availability', 'swissblue-fse' ); ?></a></div>
		<!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->
</div>
<!-- /wp:group -->
