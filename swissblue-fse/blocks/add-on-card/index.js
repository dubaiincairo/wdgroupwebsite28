/**
 * Editor script — swissblue/add-on-card (DESIGN_SYSTEM §8.2).
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
	var TextControl = wp.components.TextControl;
	var Button = wp.components.Button;
	var ServerSideRender = wp.serverSideRender;

	function field( label, key, attrs, set, type ) {
		return el( TextControl, {
			label: label,
			type: type || 'text',
			value: attrs[ key ],
			onChange: function ( v ) {
				var change = {};
				change[ key ] = v;
				set( change );
			}
		} );
	}

	registerBlockType( 'swissblue/add-on-card', {
		apiVersion: 3,
		title: __( 'Add-On Card', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'plus-alt2',
		supports: { html: false, anchor: true },
		attributes: {
			title: { type: 'string', default: '' },
			imageUrl: { type: 'string', default: '' },
			imageId: { type: 'number', default: 0 },
			detailsUrl: { type: 'string', default: '' },
			priceLabel: { type: 'string', default: 'From' },
			price: { type: 'string', default: '' },
			currency: { type: 'string', default: 'SAR' },
			selectText: { type: 'string', default: 'Add' },
			selectUrl: { type: 'string', default: '' }
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
						{ title: __( 'Add-on', 'swissblue-fse' ), initialOpen: true },
						field( __( 'Title', 'swissblue-fse' ), 'title', a, set ),
						field( __( 'Details URL', 'swissblue-fse' ), 'detailsUrl', a, set, 'url' ),
						field( __( 'Price label', 'swissblue-fse' ), 'priceLabel', a, set ),
						field( __( 'Price', 'swissblue-fse' ), 'price', a, set ),
						field( __( 'Currency', 'swissblue-fse' ), 'currency', a, set ),
						field( __( 'Button text', 'swissblue-fse' ), 'selectText', a, set ),
						field( __( 'Button URL', 'swissblue-fse' ), 'selectUrl', a, set, 'url' ),
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
											? __( 'Replace image', 'swissblue-fse' )
											: __( 'Select image', 'swissblue-fse' )
									);
								}
							} )
						)
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/add-on-card', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
