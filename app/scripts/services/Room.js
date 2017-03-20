(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var add = function(roomName) {
            rooms.$add({'roomName': roomName});
        };

        return {
            all: rooms,
            add: add
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();