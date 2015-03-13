(function() {
    angular
        .module("Wallet")
        .controller("Landing", landing) 

    landing.$inject = ['Account'] 

    function landing(Account) {
        var vm = this
        vm.isRegister = false
        vm.flip = function () {
            if (vm.isRegister == true) { vm.isRegister = false  }
            if (vm.isRegister == false) { vm.isRegister = true }
        }
    }
})()