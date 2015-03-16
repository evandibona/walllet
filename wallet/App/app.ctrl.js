(function() {
    angular
        .module("Wallet")
        .controller("WholeApp", app) 

    app.$inject = ['$location'] 

    function app($location) {
        var vm = this
        if ($location.url() == '/') {
            vm.isLanding = true 
        }
    }
})()