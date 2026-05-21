<?php
/**
 * Title: Contact Block
 * Slug: swissblue-fse/contact-block
 * Categories: text
 * Description: Property contact details — phone, WhatsApp, email and map. Phase 3 build, bound to ACF fields via the Block Bindings API (§8).
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 */

?>
<!-- wp:group {"className":"swissblue-contact-block","layout":{"type":"constrained"}} -->
<div class="wp-block-group swissblue-contact-block">
	<!-- wp:heading {"level":2} -->
	<h2><?php echo esc_html__( 'Contact', 'swissblue-fse' ); ?></h2>
	<!-- /wp:heading -->
	<!-- wp:paragraph -->
	<p><?php echo esc_html__( 'Contact details placeholder — bound to property ACF fields in Phase 3.', 'swissblue-fse' ); ?></p>
	<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
