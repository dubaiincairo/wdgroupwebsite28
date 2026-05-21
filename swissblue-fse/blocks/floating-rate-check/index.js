/**
 * Editor script — swissblue/floating-rate-check (DESIGN_SYSTEM §8.9).
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
	var TextControl = wp.components.TextControl;
	var ServerSideRender = wp.serverSideRender;

	registerBlockType( 'swissblue/floating-rate-check', {
		apiVersion: 3,
		title: __( 'Floating Rate Check', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'yes-alt',
		supports: { html: false, multiple: false, reusable: false },
		attributes: {
			label: { type: 'string', default: 'Rate Check' },
			url: { type: 'string', default: '' },
			badgeText: { type: 'string', default: '' }
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
						{ title: __( 'Rate Check button', 'swissblue-fse' ), initialOpen: true },
						el( TextControl, {
							label: __( 'Label', 'swissblue-fse' ),
							value: a.label,
							onChange: function ( v ) { set( { label: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Link URL', 'swissblue-fse' ),
							type: 'url',
							value: a.url,
							onChange: function ( v ) { set( { url: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Badge text (optional)', 'swissblue-fse' ),
							value: a.badgeText,
							onChange: function ( v ) { set( { badgeText: v } ); }
						} )
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/floating-rate-check', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
