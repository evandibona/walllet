(function () {
    angular
        .module("Wallet")
        .controller("Landing", landing)

    landing.$inject = ['Account', '$http', '$location', 'authService', '$state' ]

    function landing(Account, $http, $location, authService, $state) {
        var vm = this

        vm.isRegister = false
        vm.flip = function (mode) {
            if (mode == 'login') {
                vm.isRegister = false
                vm.logreg = {} 
            }
            if (mode == 'register') { vm.isRegister = true }
        }

        vm.authenticate = authenticate


        /////////
        function authenticate() {
            var length = Object.keys(vm.logreg).length 
            if (length == 5) {
                register(vm.logreg)
            }
            if (length == 2) {
                login(vm.logreg)
            }
        }
        // Register // 
        function register(d) {
            authService.register({
                Name: d['name'],
                Username: d['user'],
                Email: d['email'],
                Password: d['pass'],
                ConfirmPassword: d['cpass'],
            })
            .then(function (d) {
                vm.flip('login') 
                report("You can now log in! ")
            },
            function (errors) {
                report(errors)
            })
        }

        // Login // 
        function login(d) {
            authService.login({
                Username: d['user'],
                Password: d['pass']  
            })
            .then(function (d) {
                $state.go("dashboard") 
            },
            function (errors) {
                report(errors)
            })
        }

        // Register // 
        function report(d) {
            attrs = [
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