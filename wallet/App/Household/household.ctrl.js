(function () {
    angular
        .module("Wallet")
        .controller("Household", hhCtrl)

    hhCtrl.$inject = ['$http', 'authService']

    function hhCtrl($http, authService) {
        var vm = this
        vm.notifyStack = Notify
        vm.declareHouse = declareHouse
        vm.sendInvite = createInvitation
        vm.deleteInvite = deleteInvitation
        vm.respondToInvite = respondToInvitation 
        reload() 

        ///////////
        function username() {
            authService.refresh()
            return authService.info.username 
        }

        function declareHouse() {
            $http.post("/api/books/DeclareHouse",
                { "Username": username(), "Name": vm.declaredHouse })
                .success(reload) 
        }

        function createInvitation() {
            $http.post("/api/books/CreateInvitation", 
                { "From": username(), "To": vm.newInvite })
                .success(reload) 
        }

        function deleteInvitation(id) {
            $http.post("/api/books/DeleteInvitation", { "id": id })
                .success(reload) 
        }

        function respondToInvitation(id, res) {
            $http.post("/api/books/RespondToInvitation", { "id": id, "response": res })
                .success(reload) 
        }

        function reload() {
            // Needed variables. 
            var name = { "name": username()}

            vm.newInvite = ""

            // Refresh the currently assigned house. 
            $http.post("/api/books/AssignedHouse", name )
                .success(function (household) {
                    vm.assignedHouse = "null"
                    if (household.length != 0) {
                        vm.assignedHouse = household 
                    }
            })

            // Refresh the user's declared house. 
            $http.post("/api/books/DeclaredHouse", name)
                .success(function (household) {
                    if (household.length != 0) {
                        vm.declaredHouse = household 
                    }
            })

            // Refresh list of sent invitations. 
            $http.post("/api/books/ListSentInvitations", { "user": username() })
                .success(function (invitations) {
                    vm.sentInvites = invitations
            })

            // Refresh list of received invitations. 
            $http.post("/api/books/ListReceivedInvitations", { "user": username() })
                .success(function (invitations) {
                    vm.receivedInvites = invitations
            })

            // Refresh list of household members. 
            $http.post("/api/books/ListMembersByHead", { "user": username() })
                .success(function (users) {
                    vm.myMembers = users
            })

        }
    }
})()