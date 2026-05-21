<?php
/**
 * Render — swissblue/progress-stepper.
 *
 * Horizontal booking-flow stepper (DESIGN_SYSTEM §8.7). Uses a <nav> with
 * aria-current="step" on the active step, per §14.4.
 *
 * @package SwissBlue_FSE
 * @since   0.1.0
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner block content.
 * @var WP_Block $block      Block instance.
 */

defined( 'ABSPATH' ) || exit;

$raw     = isset( $attributes['steps'] ) ? (string) $attributes['steps'] : '';
$current = isset( $attributes['currentStep'] ) ? (int) $attributes['currentStep'] : 1;
$steps   = array_values( array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', $raw ) ) ) );

if ( empty( $steps ) ) {
	return;
}
?>
<nav <?php echo get_block_wrapper_attributes( array( 'class' => 'swissblue-stepper' ) ); ?> aria-label="<?php esc_attr_e( 'Booking progress', 'swissblue-fse' ); ?>">
	<ol class="swissblue-stepper__list">
		<?php
		$index = 0;
		foreach ( $steps as $step ) :
			$index++;
			if ( $index < $current ) {
				$state = 'completed';
			} elseif ( $index === $current ) {
				$state = 'active';
			} else {
				$state = 'pending';
			}
			?>
			<li class="swissblue-stepper__step is-<?php echo esc_attr( $state ); ?>"<?php echo ( 'active' === $state ) ? ' aria-current="step"' : ''; ?>>
				<span class="swissblue-stepper__marker">
					<?php if ( 'completed' === $state ) : ?>
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
							<path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					<?php else : ?>
						<?php echo esc_html( (string) $index ); ?>
					<?php endif; ?>
				</span>
				<span class="swissblue-stepper__label"><?php echo esc_html( $step ); ?></span>
			</li>
		<?php endforeach; ?>
	</ol>
</nav>
