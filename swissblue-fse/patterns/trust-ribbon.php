<?php
/**
 * Title: Trust Ribbon
 * Slug: swissblue-fse/trust-ribbon
 * Categories: featured, banner
 * Description: Three-item trust strip shown below the header. Phase 3 build per DESIGN_SYSTEM §8.5 (Promotional Trust Ribbon).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

?>
<!-- wp:group {"className":"swissblue-trust-ribbon","layout":{"type":"flex","justifyContent":"space-between","flexWrap":"wrap"}} -->
<div class="wp-block-group swissblue-trust-ribbon">
	<!-- wp:paragraph -->
	<p><?php echo esc_html__( 'Best rate guarantee', 'swissblue-fse' ); ?></p>
	<!-- /wp:paragraph -->
	<!-- wp:paragraph -->
	<p><?php echo esc_html__( 'Free cancellation', 'swissblue-fse' ); ?></p>
	<!-- /wp:paragraph -->
	<!-- wp:paragraph -->
	<p><?php echo esc_html__( '24/7 concierge', 'swissblue-fse' ); ?></p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
