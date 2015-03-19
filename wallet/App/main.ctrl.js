(function() {
    angular
        .module("Wallet")
        .controller("WholeApp", app) 

    app.$inject = ['$location', 'authService'] 

    function app($location, authService) {
        var vm = this
        vm.logout = function () {
            authService.logout() 
            $location.path("/") 
        }
    }
})()