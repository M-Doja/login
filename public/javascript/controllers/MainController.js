(function() {
	'use strict';
	angular.module('app')
	.controller('MainController', MainController);

	function MainController($http) {
  var vm = this;
  vm.hideNav = true;
	vm.showNav = function(){
		// vm.hideNav = false;
	}


  }
})();
