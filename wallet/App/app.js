(function () {
    angular
        .module("Wallet", ['ui.router'])
        .config(config)
        .run(runBlock)

    ///// Blocks /////

    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider']
    runBlock.$inject = ['$templateCache', '$rootScope', '$state', '$stateParams', 'authService']

    function config($httpProvider, $stateProvider, $urlRouterProvider) {

        $httpProvider.interceptors.push('authInterceptorService')

        $urlRouterProvider.otherwise("/")

        $stateProvider
            .state('dashboard', {
                url: "/",
                templateUrl: "App/Dash/dashboard.html",
                data: {
                    Authorize: "All"
                }
            })
            .state('landing', {
                url: "/landing",
                templateUrl: "App/Landing/landing.html", 
                data: {
                    Authorize: "Anonymous"
                }
            })
            .state('history', {
                url: "/history",
                templateUrl: "App/History/history.html", 
                data: {
                    Authorize: "All"
                }
            })
    }

    function runBlock($templateCache, $rootScope, $state, $stateParams, authService) {
        // Allows to retrieve UI Router state information from inside templates
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        authService.refresh();

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //For later improved security
            var authorized = false

            console.log(toState)

            if (toState.data.Authorize.indexOf("Anonymous") > -1)
                authorized = true
            else {
                if (authService.info.isAuth) {

                    if (toState.data.Authorize.indexOf("All") > -1)
                        authorized = true
                    else {
                        angular.forEach(authService.info.Roles, function (value, key) {
                            if (toState.Authorize.data.indexOf(value))
                                authorized = true;
                        });
                    }
                }
            }
            if (authorized == false) {
                event.preventDefault();
                $state.go('landing');
            }
        })
    }
})()