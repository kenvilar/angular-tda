(function() {
	'use strict';

	let tda = angular.module('tda', []);

	tda.component('tda', {
		controller: function() {
			console.log('This is TDA');
		},
		templateUrl: '/app/templates/tda.html',
	});
})();
