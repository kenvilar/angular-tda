(function() {
	'use strict';

	let tda = angular.module('tda', []);

	tda.component('tda', {
		controller: function() {
			const self = this;

			self.addTodo = () => {
				let newTodo = [];
				newTodo.push(self.newTodo);
			}
		},
		templateUrl: '/app/templates/tda.html',
	});
})();
