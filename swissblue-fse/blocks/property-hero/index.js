/**
 * Editor script — swissblue/property-hero (DESIGN_SYSTEM §8.1, §12.2).
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
	var MediaUpload = wp.blockEditor.MediaUpload;
	var MediaUploadCheck = wp.blockEditor.MediaUploadCheck;
	var PanelBody = wp.components.PanelBody;
	var TextControl = wp.components.TextControl;
	var Button = wp.components.Button;
	var ServerSideRender = wp.serverSideRender;

	registerBlockType( 'swissblue/property-hero', {
		apiVersion: 3,
		title: __( 'Property Hero', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'cover-image',
		supports: { html: false, anchor: true, align: [ 'wide', 'full' ] },
		attributes: {
			heading: { type: 'string', default: '' },
			subheading: { type: 'string', default: '' },
			imageUrl: { type: 'string', default: '' },
			imageId: { type: 'number', default: 0 },
			ctaText: { type: 'string', default: '' },
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
						{ title: __( 'Hero content', 'swissblue-fse' ), initialOpen: true },
						el( TextControl, {
							label: __( 'Heading', 'swissblue-fse' ),
							value: a.heading,
							onChange: function ( v ) { set( { heading: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Subheading', 'swissblue-fse' ),
							value: a.subheading,
							onChange: function ( v ) { set( { subheading: v } ); }
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
						} ),
						el(
							MediaUploadCheck,
							null,
							el( MediaUpload, {
								allowedTypes: [ 'image' ],
								value: a.imageId,
								onSelect: function ( media ) {
									set( { imageUrl: media.url, imageId: media.id } );
								},
								render: function ( o ) {
									return el(
										Button,
										{ variant: 'secondary', onClick: o.open },
										a.imageUrl
											? __( 'Replace background image', 'swissblue-fse' )
											: __( 'Select background image', 'swissblue-fse' )
									);
								}
							} )
						)
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/property-hero', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
