/**
 * Editor script — swissblue/gallery-carousel (DESIGN_SYSTEM §10.4, §11.3).
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
	var MediaUpload = wp.blockEditor.MediaUpload;
	var MediaUploadCheck = wp.blockEditor.MediaUploadCheck;
	var PanelBody = wp.components.PanelBody;
	var Button = wp.components.Button;
	var ServerSideRender = wp.serverSideRender;

	registerBlockType( 'swissblue/gallery-carousel', {
		apiVersion: 3,
		title: __( 'Gallery Carousel', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'images-alt2',
		supports: { html: false, anchor: true, align: [ 'wide', 'full' ] },
		attributes: {
			images: { type: 'array', default: [] }
		},
		edit: function ( props ) {
			var a = props.attributes;
			var set = props.setAttributes;
			var images = Array.isArray( a.images ) ? a.images : [];

			return el(
				Fragment,
				null,
				el(
					InspectorControls,
					null,
					el(
						PanelBody,
						{ title: __( 'Gallery', 'swissblue-fse' ), initialOpen: true },
						el(
							MediaUploadCheck,
							null,
							el( MediaUpload, {
								multiple: true,
								gallery: true,
								allowedTypes: [ 'image' ],
								value: images.map( function ( i ) { return i.id; } ),
								onSelect: function ( media ) {
									set( {
										images: media.map( function ( m ) {
											return { id: m.id, url: m.url, alt: m.alt || '' };
										} )
									} );
								},
								render: function ( o ) {
									return el(
										Button,
										{ variant: 'secondary', onClick: o.open },
										images.length
											? __( 'Edit gallery', 'swissblue-fse' )
											: __( 'Select images', 'swissblue-fse' )
									);
								}
							} )
						)
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/gallery-carousel', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
