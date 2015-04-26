(function () {
    angular
        .module("Wallet")
        .controller("Transactions", txCtrl)

    history.$inject = ['$http', 'authService']

    function txCtrl($http, authService) {
        var vm = this
        vm.username = getUser()
        vm.newTransaction = createTx
        reload() 

        //////////
        function getUser() {
            authService.refresh()
            return authService.info.username
        }
        function createTx() {
            console.log(vm.newTx)
            $http.post("/api/books/InsertTransaction", vm.newTx)
                .success
                .error(error)
        }
        function loadTransactions() {
            $http.post("/api/books/GetTransactionsByUser", { user: vm.username })
                .success(function (data) {
                    console.log(data) 
                    vm.transactions = data
                })
                .error(error) 
        }
        function resetTxForm() {
            vm.newTx = {
                username: vm.username,
                flow: 0
            }
        }
        function error(a, b, c, d) {
            console.log(a, b, c, d)
        }
        function reload() {
            resetTxForm()
            loadTransactions() 
        }
    }
})()