(function() {
    angular
        .module('Wallet')
        .factory('Notify', notify)

    function notify() {
        var stack = '<div id="notify-stack" class="notify-stack"> </div>'
        $( stack ).appendTo("body") 
        return {
            counter: 0, 
            push: push, 
        }

        //////////

        function push(timeout, header, message) {
            this.counter += 1 
            var id = "not-" + this.counter
            var popup = '<div id="' + id + '" class="notification notification-clear">' +
                ' <h2> ' + header + ' </h2> <p> ' + message + ' </p> </div> '

            id = '#' + id + '.notification' 
            $( popup ).appendTo("#notify-stack")

            $( id ).hide()
            $( id ).fadeIn()
            $( id ).delay(1000 * timeout)
            $( id ).fadeOut()
        }
    }

})();