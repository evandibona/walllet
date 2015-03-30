(function () {
    angular.module('Wallet').factory('authInterceptorService',
      ['$q', '$location',
      function ($q, $location) {

        var authInterceptorServiceFactory = {};

        var _request = function (config) {

            config.headers = config.headers || {};

            var authData = localStorage.getItem('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }

        var _responseError = function (rejection) {
            if (rejection.status === 401) {
                $location.path('/landing');
            }
            return $q.reject(rejection);
        }

        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
    }]);
})();
