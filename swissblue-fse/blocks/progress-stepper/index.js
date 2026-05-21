/**
 * Editor script — swissblue/progress-stepper (DESIGN_SYSTEM §8.7).
 * Plain JavaScript (no build step); previews via core ServerSideRender.
 */
( function ( wp ) {
	'use strict';

	var el = wp.element.createElement;
	var Fragment = wp.element.Fragment;
	var __ = wp.i18n.__;
	var registerBlockType = wp.blocks.registerBlockType;
	var useBlockProps = wp.blockEditor.useBlockProps;
	var InspectorControls = wp.blockEditor.InspectorControls;
	var PanelBody = wp.components.PanelBody;
	var TextareaControl = wp.components.TextareaControl;
	var TextControl = wp.components.TextControl;
	var ServerSideRender = wp.serverSideRender;

	registerBlockType( 'swissblue/progress-stepper', {
		apiVersion: 3,
		title: __( 'Progress Stepper', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'editor-ol',
		supports: { html: false, anchor: true, align: [ 'wide' ] },
		attributes: {
			steps: { type: 'string', default: '' },
			currentStep: { type: 'number', default: 1 }
		},
		edit: function ( props ) {
			var a = props.attributes;
			var set = props.setAttributes;

			return el(
				Fragment,
				null,
				el(
					InspectorControls,
					null,
					el(
						PanelBody,
						{ title: __( 'Stepper', 'swissblue-fse' ), initialOpen: true },
						el( TextareaControl, {
							label: __( 'Steps (one per line)', 'swissblue-fse' ),
							value: a.steps,
							onChange: function ( v ) { set( { steps: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Current step (1-based)', 'swissblue-fse' ),
							type: 'number',
							min: 1,
							value: a.currentStep,
							onChange: function ( v ) {
								set( { currentStep: parseInt( v, 10 ) || 1 } );
							}
						} )
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/progress-stepper', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
