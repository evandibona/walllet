(function() {
    angular
        .module("Wallet")
        .controller("WholeApp", app) 

    app.$inject = ['$location', 'authService', '$state'] 

    function app($location, authService, $state) {
        var vm = this
        vm.logout = function () {
            authService.logout() 
            $state.go("landing")
        }
        // Current User
        authService.refresh() 
        vm.currentUser = authService.info.username
    }
})()