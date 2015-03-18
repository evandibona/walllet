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
            vm.a = "Log In Action"
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
                $location.path("/dash")
                //   Reload page on success, 
                // so that it will sense that 
                // you are logged in and red- 
                // irect on its own. 
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
            $http.post("/api/user/Login", { Email: email, Password: pA})
            .success(function (data) {
                $location.path("/dash")
            })
            .error(function (d) {
                vm.error = d
                if (d["error_description"] != undefined ) {
                    vm.error = d["error_description"]
                }
            })
        }
    }
})()