(function() {
    angular
        .module("Wallet")
        .controller("WholeApp", app) 

    app.$inject = ['AppConfig'] 

    function app(AppConfig) {
        var vm = this
        vm.onLanding = AppConfig.onLanding
    }
})()