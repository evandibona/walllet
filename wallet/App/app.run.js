(function () {
    angular
        .module("Wallet")
        .run(runBlock)

    runBlock.$inject = ['$templateCache', '$rootScope', '$state', '$stateParams', 'authService']

    function runBlock($templateCache, $rootScope, $state, $stateParams, authService) {
        // Allows to retrieve UI Router state information from inside templates
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        authService.refresh();

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //For later improved security
            var authorized = false

            if (toState.data.Authorize.indexOf("Anonymous") > -1)
                authorized = true
            else {
                if (authService.info.isAuth) {

                    if (toState.data.Authorize.indexOf("All") > -1)
                        authorized = true
                    else {
                        angular.forEach(authService.info.Roles, function (value, key) {
                            if (toState.Authorize.data.indexOf(value))
                                authorized = true;
                        });
                    }
                }
            }
            if (authorized == false) {
                event.preventDefault();
                $state.go('landing');
            }
        })
    }
})()