(function() {
    angular
        .module("Wallet")
        .controller("Landing", landing) 

    landing.$inject = ['Account', '$http', '$scope', 'AppConfig'] 

    function landing(Account, $http, $scope, appConfig) {
        var vm = this
        vm.isRegister = false

        vm.flip = function () {
            if (vm.isRegister == true) { vm.isRegister = false  }
            if (vm.isRegister == false) { vm.isRegister = true }
        }
        vm.register = function () {
            vm.regOut = {email: vm.email, password: vm.passA }
            register(vm.email, vm.passA, vm.passB); 
        }

        /////////
        function register(email, pA, pB) {
            var password = ""
            var response = {}
            if (pA == pB) {
                password = pA
            }
            $http.post("/api/Account/Register", { Email: email, Password: pA, ConfirmPassword: pB })
            .success(function (data) {
                $location = "/demodebug"
            })
            .error(function (data) {
                vm.error = data['ModelState']
            })
        }
    }
})()