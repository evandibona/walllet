(function () {
    angular
        .module("Wallet", ['ui.router'])
        .config(config) 
        .run 

    ///// Blocks /////

    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'] 
    run.$inject = ['$templateCache', '$rootScope', '$state', '$stateParams', 'authService'] 

    function config($httpProvider, $stateProvider, $urlRouterProvider) {

        $httpProvider.interceptors.push('authInterceptorService')

        $urlRouterProvider.otherwise("/")

        $stateProvider
            .state('dashboard', {
                url: "/",
                templateUrl: "App/Dash/dashboard.html"
            })
            .state('landing', {
                url: "/landing",
                templateUrl: "App/Landing/landing.html"
            })
            .state('history', {
                url: "/history",
                templateUrl: "App/History/history.html"
            })
    }

    function run($templateCache, $rootScope, $state, $stateParams, authService) {
        // Allows to retrieve UI Router state information from inside templates
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        authService.refresh();

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //For later improved security
            var authorized = false;

            if (toState.data.Authorize.indexOf("Anonymous") > -1)
                authorized = true
            else {
                if (authService.authentication.isAuth) {

                    if (toState.data.Authorize.indexOf("All") > -1)
                        authorized = true;
                    else {
                        angular.forEach(authService.authentication.Roles, function (value, key) {
                            if (toState.Authorize.data.indexOf(value))
                                authorized = true;
                        });
                    }
                }
            }
            if (authorized == false) {
                event.preventDefault();
                authService.logout();
                $state.go('login');
            }
        })
    }
})()