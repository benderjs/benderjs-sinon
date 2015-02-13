/**
 * Copyright (c) 2014-2015, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */
/* global define */

( function( window, bender ) {
	'use strict';

	var unlock = bender.defer();

	function factory( sinon ) {
		window.sinon = sinon;
		unlock();
	}

	// Sinon doesn't go global if AMD is available in the page,
	// so we must retrieve it in two different ways.
	if ( typeof define == 'function' && define.amd ) {
		require( [ 'sinon' ], factory );
	} else {
		factory( window.sinon );
	}
} )( this, bender );
