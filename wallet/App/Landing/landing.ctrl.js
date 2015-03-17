(function () {
    angular
        .module("Wallet")
        .controller("Landing", landing)

    landing.$inject = ['Account', '$http', '$location']

    function landing(Account, $http, $location) {
        var vm = this
        vm.isRegister = false

        vm.flip = function () {
            if (vm.isRegister == true) { vm.isRegister = false }
            if (vm.isRegister == false) { vm.isRegister = true }
        }
        vm.authenticate = function () { authenticate(vm.email, vm.passA, vm.passB) }

        /////////
        function authenticate(email, A, B) {
            if (A != undefined && B != undefined) {
                register(email, A, B)
            }
            login(email, A)
        }
        // Register // 
        function register(email, pA, pB) {
            var password = ""
            var response = {}
            if (pA == pB) {
                password = pA
            }
            $http.post("/api/Account/Register", { Email: email, Password: pA, ConfirmPassword: pB })
            .success(function (data) {
                $location.path("/demodebug")
            })
            .error(function (data) {
                vm.error = data['ModelState']
            })
        }
        // Login // 
        function login(email, pA, pB) {
            var password = ""
            var response = {}
            if (pA == pB) {
                password = pA
            }
            $http.post("/api/Account/Register", { Email: email, Password: pA, ConfirmPassword: pB })
            .success(function (data) {
                $location.path("demodebug")
            })
            .error(function (data) {
                vm.error = data['ModelState']
            })
        }
    }
})()