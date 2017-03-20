(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.roomName = null;
        this.ok = function() {
            if(this.roomName){
                Room.add(this.roomName);
                $uibModalInstance.close();
            }
            
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
        
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();