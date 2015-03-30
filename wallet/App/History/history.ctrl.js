(function() {
    angular
        .module("Wallet")
        .controller("History", history) 

    history.$inject = ['$http'] 

    function history($http) {
        var vm = this
        vm.actions = [
            {
                what: 'a',
                when: 'b',
                who: 'c'
            },
        ]

        vm.uccelloVerde = $http.post('/api/books/HistoricalActions', {"Cognome":"asdf"}).success(loadTable).error(showError)

        //  //  //
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