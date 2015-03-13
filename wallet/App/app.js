(function () {
    angular
        .module("Wallet", ['ui.router'])
        .config(config) 

    function config($stateProvider, $urlRouterProvider) {
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
    }
})()