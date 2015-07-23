(function () {
    angular
        .module("Wallet")
        .controller("Dashboard", dash)

    dash.$inject = ['$http', 'authService', 'Notify'] 

    function dash($http, authService, Notify) {
        var vm = this
        vm.notifyStack = Notify
        vm.newTransaction = createTx
        vm.respondToInvite = respondToInvitation 
        reload() 

        //////////
        function username() {
            authService.refresh()
            return authService.info.username
        }
        function createTx() {
            $http.post("/api/books/InsertTransaction", vm.newTx)
                .success(function (d) {
                    reload()
                    vm.notifyStack.push(3, "Transactions", "Posted your newest transaction.")
                })
                .error(error)
        }

        function respondToInvitation(id, res) {
            $http.post("/api/books/RespondToInvitation", { "id": id, "response": res })
                .success(reload) 
        }

        function reload() {
            var name = { "name": username()}
            vm.notifyStack.push(3, "Models", "Reloaded the models of this page. ")

            // Reset New Transaction Model
            vm.newTx = {
                username: username(),
                flow: 0
            }

            // Download User's Transactions
            $http.post("/api/books/GetTransactionsOfUser", name)
                .success(function (data) {
                    vm.transactions = data
            })

            // Refresh the currently assigned house. 
            $http.post("/api/books/AssignedHouse", name )
                .success(function (household) {
                    vm.assignedHouse = "null"
                    if (household.length != 0) {
                        vm.assignedHouse = household 
                    }
            })

            // Refresh list of received invitations. 
            $http.post("/api/books/ListReceivedInvitations", { "user": username() })
                .success(function (invitations) {
                    vm.receivedInvites = invitations
            })

        }
        function error(a, b, c, d) {
            console.log(a, b, c, d)
        }
    }
})()