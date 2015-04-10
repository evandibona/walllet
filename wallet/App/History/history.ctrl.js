(function () {
    angular
        .module("Wallet")
        .controller("History", history)

    history.$inject = ['$http', 'authService']

    function history($http, authService) {
        var vm = this
        vm.actions = [
            {
                what: 'data',
                when: 'is currently',
                who: 'loading...'
            },
        ]

        authService.refresh() 
        var username = authService.info.username 
        vm.nothingInteresting = $http.post('/api/books/GetActions', { "name": username }).success(loadTable).error(showError)

        //////////
        function showError(a, b, c, d) {
            vm.actions[0] = {
                'what': a,
                'when': b,
                'who': c,
                'other': d,
            }
        }
        function loadTable(data) {
            vm.actions = data 
        }
    }
})()