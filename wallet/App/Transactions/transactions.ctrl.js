(function () {
    angular
        .module("Wallet")
        .controller("transactionsCtrl", txCtrl)

    history.$inject = ['$http', 'authService']

    function txCtrl($http, authService) {
        var vm = this
        vm.username = getUser() 

        //////////
        function getUser() {
            authService.refresh() 
            return authService.info.username
        }
    }
})()