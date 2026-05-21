/**
 * Editor script — swissblue/room-card (DESIGN_SYSTEM §8.2).
 *
 * Plain JavaScript (no build step): uses the global wp.* APIs and previews
 * the block with the core ServerSideRender component. Phase 3 connects these
 * attributes to ACF fields via the Block Bindings API.
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
	var TextareaControl = wp.components.TextareaControl;
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

	registerBlockType( 'swissblue/room-card', {
		apiVersion: 3,
		title: __( 'Room Card', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'admin-home',
		supports: { html: false, anchor: true },
		attributes: {
			roomName: { type: 'string', default: '' },
			planName: { type: 'string', default: '' },
			imageUrl: { type: 'string', default: '' },
			imageId: { type: 'number', default: 0 },
			inclusions: { type: 'string', default: '' },
			badgeText: { type: 'string', default: '' },
			discountText: { type: 'string', default: '' },
			originalPrice: { type: 'string', default: '' },
			price: { type: 'string', default: '' },
			currency: { type: 'string', default: 'SAR' },
			priceCaption: { type: 'string', default: '' },
			taxesText: { type: 'string', default: '' },
			selectText: { type: 'string', default: 'Select Room' },
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
						{ title: __( 'Room', 'swissblue-fse' ), initialOpen: true },
						field( __( 'Room name', 'swissblue-fse' ), 'roomName', a, set ),
						field( __( 'Rate plan name', 'swissblue-fse' ), 'planName', a, set ),
						el( TextareaControl, {
							label: __( 'Inclusions (one per line)', 'swissblue-fse' ),
							value: a.inclusions,
							onChange: function ( v ) { set( { inclusions: v } ); }
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
											? __( 'Replace image', 'swissblue-fse' )
											: __( 'Select image', 'swissblue-fse' )
									);
								}
							} )
						)
					),
					el(
						PanelBody,
						{ title: __( 'Pricing', 'swissblue-fse' ), initialOpen: false },
						field( __( 'Badge text', 'swissblue-fse' ), 'badgeText', a, set ),
						field( __( 'Discount text', 'swissblue-fse' ), 'discountText', a, set ),
						field( __( 'Original price', 'swissblue-fse' ), 'originalPrice', a, set ),
						field( __( 'Price', 'swissblue-fse' ), 'price', a, set ),
						field( __( 'Currency', 'swissblue-fse' ), 'currency', a, set ),
						field( __( 'Price caption', 'swissblue-fse' ), 'priceCaption', a, set ),
						field( __( 'Taxes & fees text', 'swissblue-fse' ), 'taxesText', a, set ),
						field( __( 'Select button text', 'swissblue-fse' ), 'selectText', a, set ),
						field( __( 'Select button URL', 'swissblue-fse' ), 'selectUrl', a, set, 'url' )
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/room-card', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
