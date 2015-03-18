'use strict';
(function () {
    angular.module('Wallet').factory('authService', ['$http', '$q', function ($http, $q) {

        var serviceBase = '/';
        var authServiceFactory = {};

        var _authentication = {
            isAuth: false,
            name: "",
            username: "",
            token: "",
            roles: []
        };

        var _register = function (registration) {

            _logOut();

            return $http.post('/api/account/register', registration); 
        };

        var _login = function (loginData) {

            var data = "grant_type=password&username=" + loginData.Username + "&password=" + loginData.Password;

            var deferred = $q.defer();

            $http.post('/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                _authentication.isAuth = true;
                _authentication.username = response.Username;
                _authentication.token = response.access_token;
                _authentication.name = response.Name;
                _authentication.roles = response.Roles;

                console.log("setting this item to local storage\n",_authentication)
                localStorage.setItem('authorizationData', _authentication);

                deferred.resolve(response);

            }).error(function (err, status) {
                _logOut();
                deferred.reject(err);
            });

            return deferred.promise;

        };

        var _logOut = function () {

            localStorage.removeItem('authorizationData');

            _authentication.isAuth = false;
            _authentication.username = "";
            _authentication.name = "";
            _authentication.token = "";
            _authentication.roles = [];

        };

        var _fillAuthData = function () {

            var authData = localStorage.getItem('authorizationData');
            console.log(">>", authData, "<<") 
            if (authData) {
                _authentication.isAuth = true;
                _authentication.username = authData.username;
                _authentication.name = authData.name;
                _authentication.token = authData.token;
                _authentication.roles = authData.roles;
            }

        }

        authServiceFactory.register = _register;
        authServiceFactory.login = _login;
        authServiceFactory.logout = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;

        return authServiceFactory;
    }]);


})();