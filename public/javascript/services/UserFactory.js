(function() {
  "use strict";
  angular.module('app')
  .factory('UserFactory', UserFactory);
  function UserFactory($http, $q) {
    var o = {};
    o.status = {};

    if(getToken()){
      setUser();
    }
      // LOG-IN / LOG OUT AND REGISTRATION
    o.logout = function(){
      removeToken();
      o.status.username = null;
      o.status._id = null;
    };
    o.registerUser = function(user) {
        console.log(user);
      var q = $q.defer();
      $http.post('/api/user/register', user).then(function(res) {
        setToken(res.data);
        setUser();
        var user = o.getUser();
        o.status.username = user.username;
        o.status._id = user._id;
        q.resolve(res.data);
      });
      return q.promise;
    };
    o.loginUser = function(user) {
      console.log("Second stop of DF journey");
      var q = $q.defer();
      $http.post('/api/user/login', user).then(function(res) {
        console.log("Fifth stop");
        setToken(res.data); //puts the token on localStorage
        setUser();
        var user = o.getUser();
        o.status.username = user.username;
        o.status._id = user._id;
        q.resolve(res.data);
      });
      return q.promise;
    };

    // ADD A NEW PROFILE
  o.addProfile = function(user){
  console.log('Sending to router');
  var q = $q.defer();
  $http.post('/api/profile/', user).then(function(res){
  q.resolve(res.data);
  });
  return q.promise;
  };

      // Show All Profiles
o.showProfiles = function() {
  console.log('show pro fact');
  var q = $q.defer();
  $http.get('/api/profile/').then(function(res){
    q.resolve(res.data)
  });
  return q.promise;
};

o.EditProfile = function(id){
			var q= $q.defer();
			$http.put('/api/profile', id).then(function(res){
			console.log("at Factory");
				q.resolve(res.data);
			});
			o.showProfiles();
			return q.promise;
		};
o.deleteProfile = function(id){
			var q = $q.defer();
			$http.delete('/api/profile/' + id).then(function(){
				q.resolve();
			});
			return q.promise;
		};

    o.getUserProfile = function(id){
      // console.log("just got to factory about to go to route");
      var q = $q.defer();
      // console.log(user._id + " user._id in factory");
      $http.get('/api/user/'+id+'/family')
      .then(function(res){
        q.resolve(res.data);
        // console.log(res.data + 'res.data from factory being sent back to controller');
      });
      console.log(q.promise + "q.promise from factory");
      return q.promise;
    };





    // SETTING AUTH TOKEN TO INDIV USER
    function setUser(){
      var user = JSON.parse(urlBase64Decode(getToken().split('.')[1]));
      o.status.username = user.username;
      o.status._id = user._id;
      console.log(o.status);
    }
    function removeUser(){
      o.status.username = null;
      o.status._id = null;
    }
    function getToken() {
      return localStorage.getItem('token');
    };
    function setToken(token) {
      return localStorage.setItem('token',token);
    };
    function removeToken() {
      return localStorage.removeItem('token');
    };
    function logout() {
      removeToken();
      removeUser();
    };

      // UNICORN MAGIC
    function urlBase64Decode(str) {
      var output = str.replace(/-/g, '+').replace(/_/g, '/');
      switch (output.length % 4) {
        case 0: { break; }
        case 2: { output += '=='; break; }
        case 3: { output += '='; break; }
        default: {
          throw 'Illegal base64url string!';
        }
      }
      return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
    }
    o.getUser = function() {
      return JSON.parse(urlBase64Decode(getToken().split('.')[1]));
    };




    return o;
}
})();
