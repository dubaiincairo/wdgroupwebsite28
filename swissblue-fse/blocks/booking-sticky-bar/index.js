/**
 * Editor script — swissblue/booking-sticky-bar (DESIGN_SYSTEM §8.8).
 *
 * Plain JavaScript (no build step): uses the global wp.* APIs and previews
 * the block with the core ServerSideRender component.
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
	var TextControl = wp.components.TextControl;
	var ServerSideRender = wp.serverSideRender;

	registerBlockType( 'swissblue/booking-sticky-bar', {
		apiVersion: 3,
		title: __( 'Booking Sticky Bar', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'money-alt',
		supports: { html: false, multiple: false, reusable: false },
		attributes: {
			totalLabel: { type: 'string', default: 'Grand Total' },
			price: { type: 'string', default: '' },
			currency: { type: 'string', default: 'SAR' },
			ctaText: { type: 'string', default: 'Continue' },
			ctaUrl: { type: 'string', default: '' }
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
						{ title: __( 'Sticky bar', 'swissblue-fse' ), initialOpen: true },
						el( TextControl, {
							label: __( 'Total label', 'swissblue-fse' ),
							value: a.totalLabel,
							onChange: function ( v ) { set( { totalLabel: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Price', 'swissblue-fse' ),
							value: a.price,
							onChange: function ( v ) { set( { price: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Currency', 'swissblue-fse' ),
							value: a.currency,
							onChange: function ( v ) { set( { currency: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Button text', 'swissblue-fse' ),
							value: a.ctaText,
							onChange: function ( v ) { set( { ctaText: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Button URL', 'swissblue-fse' ),
							type: 'url',
							value: a.ctaUrl,
							onChange: function ( v ) { set( { ctaUrl: v } ); }
						} )
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/booking-sticky-bar', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
