(function () {
    angular
        .module("Wallet")
        .controller("Dashboard", dash)

    function dash() {
        var vm = this
        // get the ten most recent transactions made inside this household. 
        // vm.recentTransactions = get('select top 10 date, user, description, amount from transactions') 
        vm.recentTransactions = [
            {
                'date': '25.3.15',
                'user': 'Evan DiBona',
                'desc': 'Waffle cone.',
                'amnt': '$8'
            },
            {
                'date': '23.3.15',
                'user': "Ricky Q'Mais",
                'desc': 'Eggs and bacon at the Waffle House',
                'amnt': '$18'
            },
            {
                'date': 'March 22, 2015',
                'user': "Sam Oort",
                'desc': 'Fried Chicken and Waffles',
                'amnt': '$23'
            },
            {
                'date': '3/7/15',
                'user': "Ernie Ernstein",
                'desc': 'Illegal Fireworks',
                'amnt': '$2,313'
            },
            {
                'date': '3.7.15',
                'user': "Ernie Ernstein",
                'desc': '"Investments"',
                'amnt': '$45,436'
            },
            {
                'date': '3.7.15',
                'user': "Paolo Puglia",
                'amnt': '$35',
                'desc': 'Pizza e Spaghetti! Stavo passeggiando in torno Boston e ho trovato un meraviglioso posto mangiare pasta e pizza. '
            },
        ]
        vm.bankAccounts = {
            'Checkings': '$581,321', 
            'Savings': '$112,358', 
        }

        vm.hhBalanceEst = "$7,385,194"
        vm.hhBalanceReal = "$386"
    }
})()