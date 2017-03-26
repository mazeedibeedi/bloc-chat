(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) {
                var roomMessage = ref.orderByChild("roomId").equalTo(roomId);
                return $firebaseArray(roomMessage);
            },
            send: function(newMessage, roomId) {
                messages.$add({"content": newMessage,
                               "roomId": roomId,
                               "username": $cookies.get('blocChatCurrentUser'),
                               "sentAt": firebase.database.ServerValue.TIMESTAMP
                              });
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();