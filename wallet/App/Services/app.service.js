(function() {
    angular
        .module("Wallet")
        .factory("AppConfig", appConfig) 

    function appConfig() {
        return {
            onLanding: false,
        }
        /////////////////
        isOnLanding = false 
    }
})()