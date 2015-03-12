(function() {
    angular
        .module("Wallet")
        .controller("Register", regCtrl) 

    function regCtrl() {
        var vm = this 
        vm.user = ""
        vm.pass = ""
        vm.s = "-----"

        vm.submit = function() {
            vm.s = "!--M--!"
        }
        console.log(vm)
    }
})()