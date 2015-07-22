(function () {
    angular
        .module("Wallet")
        .controller("Dashboard", dash)

    dash.$inject = ['Notify'] 

    function dash(Notify) {
        var vm = this
        vm.notifyStack = Notify
    }
})()