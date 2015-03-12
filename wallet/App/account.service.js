(function() {
    angular
        .module("Wallet")
        .factory("Account", account) 

    account.$inject = ['$http'] 

    function account() {
        return {
            register: register,
            login: login,
            logout: logout, 
            users: listUsers, 
        }
        /////////////////
        function register(email, passA, passB) {
        }
        function login(email, password) {
        }
        function logout() {
        }
        // Should belong to a more general Authentication service. 
        //      Auth AuthStats SiteStats
        function listUsers() {
            return ["Alpha", "Beta", "Signor"]
        }
    }
})()