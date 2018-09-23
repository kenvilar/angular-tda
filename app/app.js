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
				if (self.newTodo && self.newTodo.title && self.newTodo.priority) {
					self.todoArr.push({
						title: self.newTodo.title,
						priority: self.newTodo.priority,
					});

					self.newTodo = {
						title: '',
						priority: '',
					};
				}
			};
		},
		templateUrl: '/app/templates/tda.html',
	});
})();
