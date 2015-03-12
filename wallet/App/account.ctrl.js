(function() {
    angular
        .module("Wallet")
        .controller("AccManage", accountMan) 

    accountMan.$inject = ['Account'] 

    function accountMan(Account) {
        var vm = this
        vm.users = Account.users() 
    }
})()