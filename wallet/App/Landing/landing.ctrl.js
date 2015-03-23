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
        loggedInCheck() // Already logged in? 
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
                toDashboard()
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