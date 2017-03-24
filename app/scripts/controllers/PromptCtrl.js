(function() {
    function PromptCtrl($cookies, $uibModalInstance) {
        this.username = '';
        this.ok = function() {
            if (this.username && this.username!==''){
                $cookies.put('blocChatCurrentUser', this.username);
                $uibModalInstance.close();
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('PromptCtrl', ['$cookies', '$uibModalInstance', PromptCtrl]);
})();