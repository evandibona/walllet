(function () {
    angular
        .module("Wallet")
        .controller("Household", hhCtrl)

    hhCtrl.$inject = ['$http', 'authService']

    function hhCtrl($http, authService) {
        var vm = this
        reload() 

        ///////////
        function username() {
            authService.refresh()
            return authService.info.username 
        }

        function reload() {
            var name = { "name": username()}
            $http.post("/api/books/HouseOfUser", name )
            .success(function(household) {
                vm.myHouse = "unassigned"
                if (household.length != 0) {
                    vm.myHouse = household
                }
                console.log(vm.myHouse) 
            }) 
        }
    }
})()