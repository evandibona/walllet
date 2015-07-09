(function () {
    angular
        .module("Wallet")
        .controller("Household", hhCtrl)

    hhCtrl.$inject = ['$http', 'authService']

    function hhCtrl($http, authService) {
        var vm = this
        vm.houseCreateUpdate = HouseCreateOrUpdate
        reload() 

        ///////////
        function username() {
            authService.refresh()
            return authService.info.username 
        }

        function HouseCreateOrUpdate() {
            $http.post("/api/books/HouseCreateOrUpdate", vm.myHouse)
            reload()
        }

        function reload() {
            vm.myHouse = {} 
            vm.myHouse['Creator'] = username() 
            $http.post("/api/books/HouseOfAuthor", { "name": vm.myHouse['Creator'] })
            .success(function(household) {
                vm.myHouse = household
                console.log(vm.myHouse) 
            }) 
        }
    }
})()