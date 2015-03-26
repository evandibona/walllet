(function () {
    angular
        .module("Wallet", ['ui.router'])
        .config(config) 

    ///// Blocks /////

    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'] 

    function config($httpProvider, $stateProvider, $urlRouterProvider) {

        $httpProvider.interceptors.push('authInterceptorService')

        $urlRouterProvider.otherwise("/")

        $stateProvider
            .state('landing', {
                url: "/",
                templateUrl: "App/Landing/landing.html"
            })
            .state('dashboard', {
                url: "/dash",
                templateUrl: "App/Dash/dashboard.html"
            })
            .state('history', {
                url: "/history",
                templateUrl: "App/History/history.html"
            })
    }
})()