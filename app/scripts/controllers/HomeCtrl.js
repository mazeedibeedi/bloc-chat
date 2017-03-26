(function() {
    function HomeCtrl(Room, Message, $uibModal){
        this.roomData = Room.all;
        this.activeRoom = null;
        this.messages = [];
        this.message = '';
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
            this.message = '';
        };
        this.send = function() {
            if (this.activeRoom && this.message !== ''){
                Message.send(this.message, this.activeRoom.$id);
                this.message = '';
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();