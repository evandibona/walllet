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
            loggedIn: loggedIn, 
        }
        /////////////////
        function register(email, passA, passB) {
        }
        function login(email, password) {
        }
        function logout() {
        }
        function loggedIn() {
            // 
            return false 
        }
    }
})()