(function () {
    angular
        .module("Wallet", ['ui.router'])
        .config(config) 

    ///// Blocks /////

    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'] 

    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.interceptors.push('authInterceptorService')

        $urlRouterProvider.otherwise("/")

        $stateProvider
            .state('demodebug', {
                url: "/demodebug",
                templateUrl: "App/DemoDebug/demodebug.html"
            })
            .state('landing', {
                url: "/",
                templateUrl: "App/Landing/landing.html"
            })
            .state('dashboard', {
                url: "/dash",
                templateUrl: "App/Dash/dashboard.html"
            })
    }
})()