/**
 * Editor script — swissblue/amenity-grid (DESIGN_SYSTEM §9, §7.4).
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
	var TextareaControl = wp.components.TextareaControl;
	var ServerSideRender = wp.serverSideRender;

	registerBlockType( 'swissblue/amenity-grid', {
		apiVersion: 3,
		title: __( 'Amenity Grid', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'grid-view',
		supports: { html: false, anchor: true, align: [ 'wide' ] },
		attributes: {
			heading: { type: 'string', default: '' },
			items: { type: 'string', default: '' }
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
						{ title: __( 'Amenities', 'swissblue-fse' ), initialOpen: true },
						el( TextControl, {
							label: __( 'Heading', 'swissblue-fse' ),
							value: a.heading,
							onChange: function ( v ) { set( { heading: v } ); }
						} ),
						el( TextareaControl, {
							label: __( 'Amenities (one per line)', 'swissblue-fse' ),
							value: a.items,
							onChange: function ( v ) { set( { items: v } ); }
						} )
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/amenity-grid', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
