(function() {
    angular
        .module("Wallet")
        .controller("AccManage", accountMan) 

    accountMan.$inject = ['Account'] 

    function accountMan(Account) {
        var vm = this
        vm.users = Account.users() 
        vm.register = function () {
            //Account.register(vm.username, vm.passA, vm.passB) 
        }
    }
})()