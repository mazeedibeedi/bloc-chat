(function() {
    function HomeCtrl(Room, Message, $uibModal){
        this.roomData = Room.all;
        this.activeRoom = null;
        this.messages = [];
        this.open = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
            });
        };
        this.select = function(room) {
            this.activeRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        }
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();