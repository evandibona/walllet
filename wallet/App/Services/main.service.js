(function() {
    angular
        .module("Wallet")
        .factory("AppConfig", appConfig) 

    function appConfig() {
        return {
            isLanding: false,
        }
    }
})()