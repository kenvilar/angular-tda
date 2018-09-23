(function() {
	'use strict';

	let tda = angular.module('tda', []);

	tda.component('tda', {
		controller: function() {
			const self = this;

			self.$onInit = () => {
				self.todoArr = [];
			};

			self.addTodo = () => {
				self.todoArr.push(self.newTodo);
				console.log(self.todoArr);
			}
		},
		templateUrl: '/app/templates/tda.html',
	});
})();
