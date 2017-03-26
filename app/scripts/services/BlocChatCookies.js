(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/prompt.html',
                controller: 'PromptCtrl',
                controllerAs: 'prompt',
                backdrop: 'static'
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();