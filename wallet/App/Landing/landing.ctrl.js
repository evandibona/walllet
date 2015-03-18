(function () {
    angular
        .module("Wallet")
        .controller("Landing", landing)

    landing.$inject = ['Account', '$http', '$location']

    function landing(Account, $http, $location) {
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
            if (A != undefined && B != undefined) {
                register(email, A, B)
            }
            vm.a = "Log In Action"
            login(email, A)
        }
        // Register // 
        function register(email, a, b) {
            $http.post("/api/Account/Register", { Email: email, Password: a, ConfirmPassword: b })
            .success(toDashboard) 
            .error(report) 
        }
        // Login // 
        function login(email, pass) {
            $http.post("/api/account/Login", { Email: email, Password: pass})
            .success(toDashboard) 
            .error(report) 
        }
        // Redirect if User is Logged in // 
        function loggedIn() {
            $http.get("/api/account/UserInfo", {
                headers: { 'Authorization': '?access_token=Cn8ywBxS69b2LUKLcvr7tuV_PLGtWkQk7imDvN679HwNjtrfgQL4H7u8jFSnjN-vS91I6b2vN77azFkSj8EXqk_fCfffHkFTcQGmfx-VybZQvUjQsI5h4MpfRA927wPt3DqUffx7I1UKSO3t_5qVQAXy867T2QjCRR7nJZqgBMl2m2QD_y5xH5RT6MOJzaEiCf8JP2FwNcjenO-he5I66jK-MtcWqlbJOYIlfhYFZ2FYSSTpqvEx-4g_GGuAjbUd4jqPhDntfQCNRjB_4-Z97-nGtFtDoR59JfXuCJjRKASkS3ChQhOmcV8ETyTLCcFHDuTMgyQwfvgXSFtecpPi8Gf3U__2oGiCJG9gXeiAAs71_t0MzLuNyQT9KBP4oH4g5rUcA7TUbjfNkvTP8NqefOPRJ4nZhWpMcvorHrCD-HbN8JWAIllRSw4pUn3lY9h4D3cfxweLJoQeecsUlb1urzV0awiHrwJMevZKSmrJWoTfjI-VrDoaDMSOUSgJ5NuN' } 
            })
            .success(function (data) {
                vm.a = data
            })
            .error(report) 
            if ('a' == 'b') {
                toDashboard() 
            }
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
            angular.forEach(attrs, function(e) {
                if (d[e] != undefined) {
                    vm.error = d[e] 
                }
            }) 
        }
    }
})()