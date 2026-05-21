<?php
/**
 * Title: Property Hero
 * Slug: swissblue-fse/property-hero
 * Categories: featured, banner
 * Description: Full-width property hero with overlaid title and primary CTA. Phase 3 build per DESIGN_SYSTEM §12.2 and §8.1.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

?>
<!-- wp:group {"className":"swissblue-property-hero","layout":{"type":"constrained"}} -->
<div class="wp-block-group swissblue-property-hero">
	<!-- wp:heading {"level":1} -->
	<h1><?php echo esc_html__( 'Property name', 'swissblue-fse' ); ?></h1>
	<!-- /wp:heading -->
	<!-- wp:buttons -->
	<div class="wp-block-buttons">
		<!-- wp:button -->
		<div class="wp-block-button"><a class="wp-block-button__link wp-element-button"><?php echo esc_html__( 'Book now', 'swissblue-fse' ); ?></a></div>
		<!-- /wp:button -->
	</div>
	<!-- /wp:buttons -->
</div>
<!-- /wp:group -->
