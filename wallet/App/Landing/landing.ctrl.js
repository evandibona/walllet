(function () {
    angular
        .module("Wallet")
        .controller("Landing", landing)

    landing.$inject = ['Account', '$http', '$location', 'authService']

    function landing(Account, $http, $location, authService) {
        var vm = this
        vm.isRegister = false

        vm.flip = function () {
            var v = vm.isRegister
            if (v == true) { vm.isRegister = false }
            if (v == false) { vm.isRegister = true }
        }
        loggedIn() // Already logged in? 
        vm.authenticate = function () { authenticate(vm.email, vm.passA, vm.passB) }


        /////////
        function authenticate(email, A, B) {
            var t = ""
            if (vm.a == "Authenticate") {
                t = "--> Authenticate <--"
            }
            if (vm.a != "Authenticate") {
                t = "Authenticate"
            }
            vm.a = t
            if (A != undefined && B != undefined) {
                register(email, A, B)
            }
            login(email, A)
        }
        // Register // 
        function register(email, a, b) {
            authService.register({
                Email: email,
                Password: a,
                ConfirmPassword: b, 
            })
            .then(function (d) {
                toDashboard() 
            }, 
            function (d) {
                console.log(d['data'], "Failure")
            })
        }
        // Login // 
        function login(email, pass) {
            authService.login({
                Username: email,
                Password: pass
            })
            .then(function (d) {
                toDashboard() 
            },
            function (d) {
                console.log(d, d[""])
            })
        }
        // Redirect if User is Logged in // 
        function loggedIn() {
            authService.fillAuthData()
        }
        // Helpers //
        function toDashboard() {
            $location.path('/dash')
        }
        function report(d) {
            attrs = [
                "error_description", "Message",
                "MessageDetail", "ModelState"
            ]
            vm.error = d
            angular.forEach(attrs, function (e) {
                if (d[e] != undefined) {
                    vm.error = d[e]
                }
            })
        }
    }
})()