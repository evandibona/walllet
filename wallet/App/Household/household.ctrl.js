(function () {
    angular
        .module("Wallet")
        .controller("Household", hhCtrl)

    hhCtrl.$inject = ['$http', 'authService']

    function hhCtrl($http, authService) {
        var vm = this
        vm.currentHouse = "BingBingBing"
        vm.createdHouse = "DingWingPing"
        vm.updateHouse = updateHouse 
        reload() 

        ///////////
        function username() {
            authService.refresh()
            return authService.info.username 
        }

        function updateHouse() {
            $http.post("/api/books/UpdateHousehold", vm.hh)
            reload()
        }
        
        function reload() {
            vm.myHousehold['name'] = "Ouan"
        }
    }
})()