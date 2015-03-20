﻿(function () {
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
        loggedInCheck() // Already logged in? 
        vm.authenticate = function () { authenticate(vm.email, vm.passA, vm.passB) }


        /////////
        function authenticate(email, A, B) {
            if (A != undefined && B != undefined) {
                register(email, A, B)
            }
            if (A != undefined && B == undefined) {
                login(email, A)
            }
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
            function (errors) {
                report(errors)
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
            function (errors) {
                report(errors)
            })
        }
        // Redirect if User is Logged in // 
        function loggedInCheck() {
            authService.refresh()
            if (authService.info.isAuth) {
                toDashboard()
            }
        }
        // Helpers //
        function toDashboard() {
            $location.path('/dash')
        }
        function report(d) {
            attrs = [
                // v This needs to be fixed. 
                "error_description", "Message",
                "MessageDetail", 
                "data.ModelState['']", 
                "data.ModelState['model.Password']", 
            ]
            vm.error = d
            angular.forEach(attrs, function (e) {
                var v = eval('d.' + e)
                if (v != undefined) {
                    vm.error = v
                }
            })
        }
    }
})()