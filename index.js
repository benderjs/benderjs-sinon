/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

'use strict';

var path = require( 'path' ),
	sinonPath = path.join( require.resolve( 'sinon' ), '../../pkg/sinon.js' ).split( path.sep ).join( '/' ),
	sinonIEPath = path.join( require.resolve( 'sinon' ), '../../pkg/sinon-ie.js' ).split( path.sep ).join( '/' );

module.exports = {
	name: 'bender-sinon',
	files: [ sinonPath, sinonIEPath ],

	attach: function() {
		module.exports.build = build;
		this.pagebuilders.add( 'sinon', build, this.pagebuilders.getPriority( 'html' ) - 1 );

		this.plugins.addFiles( module.exports.files );

		function build( data ) {
			data.parts.push(
				'<head>' +
					'<script src="' + path.join( '/plugins', sinonPath ) + '"></script>' +
					// IE8- need additional care to make timers and XHR work.
					'<!--[if lte IE 8]>' +
						'<script src="' + path.join( '/plugins', sinonIEPath ) + '"></script>' +
					'<![endif]-->' +
				'</head>'
			);

			return data;
		}
	}
};
