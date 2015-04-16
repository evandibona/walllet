(function () {
    angular
        .module("Wallet")
        .controller("Transactions", txCtrl)

    history.$inject = ['$http', 'authService']

    function txCtrl($http, authService) {
        var vm = this
        vm.username = getUser() 
        vm.newTx = {
            user: vm.username, 
            flow: 0 
        }
        vm.newTransaction = createNewTx

        //////////
        function getUser() {
            authService.refresh() 
            return authService.info.username
        }
        function createNewTx() {
            $http.post("/api/books/InsertTransaction", vm.newTx)
                .success(refreshModels)
                .error(error)
        }
        function refreshModels(response) {
            console.log(response)
            /* 
            reset form
            get transactions
            */
        }
        function error(a, b, c, d) {
            console.log(a,b,c,d) 
        }
    }
})()