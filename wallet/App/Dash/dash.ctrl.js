(function () {
    angular
        .module("Wallet")
        .controller("Dashboard", dash)

    dash.$inject = ['Notify'] 

    function dash(Notify) {
        var vm = this
         Notify.push(3, "whoah!", "Somehow, we got it to work!")
         Notify.push(3, "whoah!", "Somehow, we got it to work!")
         Notify.push(3, "whoah!", "Somehow, we got it to work!")
         Notify.push(3, "whoah!", "Somehow, we got it to work!")
    }
})()