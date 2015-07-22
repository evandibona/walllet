(function () {
    angular
        .module("Wallet")
        .directive('typeahead', typeahead)

    function typeahead() {
        return {
            restrict: 'E',
            transclude: true, 
            replace: true, 
            scope: {taData: '=', taModel: '='}, 
            link: link, 
            templateUrl: '/App/Directives/typeahead.html', 
        }
        //////////
        /* Abstract the below function, into more. */
        //////////
        function link(scope, element, attributes) {
            var userList = []
            scope.$watch( function () {
                var reflist = scope.taData
                var dataStr = scope.taModel
                var displayList = [] 
                angular.forEach(reflist, function (item, itemKey) {
                    var itemAdded = false
                    angular.forEach(item, function (val, key) {
                        val = val.toString()
                        if (val.match(dataStr) && !itemAdded) {
                            itemAdded = true
                            displayList.push(item)
                        }
                    })
                })
                scope.taDataList = displayList
                console.log(scope)
            })
            
        }
    }
})()