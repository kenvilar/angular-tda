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
				self.todoArr.push({
					title: self.newTodo.title,
					priority: self.newTodo.priority,
				});
				console.log(self.todoArr);

				self.newTodo = {
					title: '',
					priority: '',
				};
			};
		},
		templateUrl: '/app/templates/tda.html',
	});
})();
