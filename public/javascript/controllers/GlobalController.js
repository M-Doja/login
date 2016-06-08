(function() {
  "use strict";
  angular.module('app')
  .controller('GlobalController', GlobalController);
  function GlobalController(UserFactory, $state) {
    var vm = this;
    vm.isLogin = true; //switch between the login and register view on the login_register.html page
    vm.user = {};
    vm.status = UserFactory.status;

    // Mock Data
    vm.user = {
      "AllEvents" : [
        { "name": "The Coder Night" },
        { "name": "Angular Weekly" },
        { "name": "The Party Animals" },
        { "name": "Bull Run" }
      ]
    };
    vm.eventCount = vm.user.AllEvents.length;

var str = "34.1980,-119.1726";
var str2 = str.split(',');
console.log(str);
console.log(str2);
// console.log(str2[0]);
var lat = str2[0];
// console.log(str2[1]);
var lon = str2[1];
console.log("lat:"+lat + " : lon:" +lon);
    /////////////////////////////////////////////////

    vm.registerUser = function() {
      UserFactory.registerUser(vm.user).then(function() {
        $state.go('Home');
        window.scrollTo(0, 0);
        window.reload();
      });
    };

    vm.loginUser = function() {
      UserFactory.loginUser(vm.user).then(function() {
        $state.go('Home');
        location.reload();
        window.scrollTo(0, 0);
        vm.user = {};
      });
    };

    vm.logout = function() {
      UserFactory.logout();
      $state.go('Splash');
    };





  }
})();
