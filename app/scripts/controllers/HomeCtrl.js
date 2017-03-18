(function() {
    function HomeCtrl(Room){
        this.roomData = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();