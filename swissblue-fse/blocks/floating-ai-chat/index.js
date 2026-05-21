/**
 * Editor script — swissblue/floating-ai-chat (DESIGN_SYSTEM §8.9).
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

	registerBlockType( 'swissblue/floating-ai-chat', {
		apiVersion: 3,
		title: __( 'Floating AI Chat', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'format-chat',
		supports: { html: false, multiple: false, reusable: false },
		attributes: {
			label: { type: 'string', default: 'AI Chat' },
			url: { type: 'string', default: '' }
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
						{ title: __( 'AI chat bubble', 'swissblue-fse' ), initialOpen: true },
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
						} )
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/floating-ai-chat', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
