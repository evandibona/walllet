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
            .state('transactions', {
                url: "/transactions",
                templateUrl: "App/Transactions/transactions.html", 
                data: { Authorize: "All" }
            })
            .state('household', {
                url: "/household",
                templateUrl: "App/Household/household.html", 
                data: { Authorize: "All" }
            })
            .state('history', {
                url: "/history",
                templateUrl: "App/History/history.html", 
                data: {
                    Authorize: "All"
                }
            })
    }
})()