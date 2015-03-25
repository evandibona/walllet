(function () {
    angular
        .module("Wallet")
        .factory("Dummy", dummyData)

    function dummyData() {
        // Lot's of bad practices in this :)

        return {
            // Households
            // Relevant Types
            //  pools, users, transactions, Streams(revenue, and expenses), BankAccounts, HistoricBankBalances, Actions (Historic)
            households: [
                ['Id', 'Name'], 
                ['1', 'Smith'], 
                ['2', 'Finkel'], 
                ['3', 'Harold'], 
            ],
            pools: [
                ['id', 'name', 'size', 'j']
            ]
        }
    }
})()