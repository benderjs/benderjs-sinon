/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

'use strict';

var path = require( 'path' ),
	sinonPath = path.join( require.resolve( 'sinon' ), '../../pkg/sinon.js' ).split( path.sep ).join( '/' ),
	sinonIEPath = path.join( require.resolve( 'sinon' ), '../../pkg/sinon-ie.js' ).split( path.sep ).join( '/' );

module.exports = {
	name: 'bender-pagebuilder-sinon',

	build: function( data ) {
		data.parts.push( '<head><script src="' + path.join( '/plugins', sinonPath ) + '"></script></head>' );

		data.parts.push(
			'<head><script>' +
				'if( navigator.userAgent.toLowerCase().indexOf( \'trident\' ) > -1 )' +
					'document.write( \'\<scr\' + \'ipt src="' + path.join( '/plugins', sinonIEPath ) + '"\>\<\/scr\' + \'ipt\> \' )' +
			'</script></head>' );

		return data;
	},

	files: [ sinonPath, sinonIEPath ]
};
