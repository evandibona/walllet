(function () {
    angular
        .module("Wallet")
        .controller("Household", hhCtrl)

    hhCtrl.$inject = ['$http', 'authService']

    function hhCtrl($http, authService) {
        var vm = this
        vm.declareHouse = declareHouse
        vm.sendInvite = createInvitation
        vm.deleteInvite = deleteInvitation
        reload() 

        /* 
        * KEY FUNCTIONS
        *   List members of subscribed list. ( + head )
        *   Send Invitations
        *   Receive invitations
        *   Declared House
        */
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
            $http.post("/api/books/DeleteInvitation", { "Id": id })
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
            $http.post("/api/books/ListSentInvitations", { "User": username() })
                .success(function (invitations) {
                    vm.sentInvites = invitations
                })

            // Refresh list of received invitations. 
            $http.post("/api/books/ListReceivedInvitations", { "User": username() })
                .success(function (invitations) {
                    vm.receivedInvites = invitations
                })
        }
    }
})()