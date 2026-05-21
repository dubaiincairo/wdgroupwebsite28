/**
 * Editor script — swissblue/ai-banner (DESIGN_SYSTEM §8.6).
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

	registerBlockType( 'swissblue/ai-banner', {
		apiVersion: 3,
		title: __( 'AI Banner', 'swissblue-fse' ),
		category: 'swissblue',
		icon: 'superhero-alt',
		supports: { html: false, anchor: true, align: [ 'wide' ] },
		attributes: {
			title: { type: 'string', default: '' },
			subtitle: { type: 'string', default: '' }
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
						{ title: __( 'AI banner', 'swissblue-fse' ), initialOpen: true },
						el( TextControl, {
							label: __( 'Title', 'swissblue-fse' ),
							value: a.title,
							onChange: function ( v ) { set( { title: v } ); }
						} ),
						el( TextControl, {
							label: __( 'Subtitle', 'swissblue-fse' ),
							value: a.subtitle,
							onChange: function ( v ) { set( { subtitle: v } ); }
						} )
					)
				),
				el(
					'div',
					useBlockProps(),
					el( ServerSideRender, { block: 'swissblue/ai-banner', attributes: a } )
				)
			);
		},
		save: function () { return null; }
	} );
} )( window.wp );
