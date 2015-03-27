(function() {
    angular
        .module("Wallet")
        .controller("History", history) 

    history.$inject = [] 

    function history() {
        var vm = this
        vm.actions = [
            {
                'what': 'Kicked User "evandibona"',
                'when': 'April 2, 2015',
                'who' : 'joshm'
            }, 
            {
                'what': 'Created the category: "Food"',
                'when': '4.4.2015',
                'who' : 'Scott Gaines'
            }, 
            {
                'what': 'Sent Invitation to "murphy@falcon.co"',
                'when': '4/6/15',
                'who' : 'Fred Quail'
            }, 
            {
                'what': 'Deleted Bank Account: "Savings"',
                'when': 'April 8, 2015',
                'who' : 'David Drew'
            }, 
        ]
    }
})()