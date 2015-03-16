(function() {
    angular
        .module("Wallet")
        .controller("WholeApp", app) 

    app.$inject = ['$location'] 

    function app($location) {
        var vm = this
        vm.url = $location.url() 
        console.log(vm.url) 
    }
})()