(function () {
    'use strict';

    angular.module('starter', ['ui.router'

    ]);
})();

(function () {
    'use strict';

    angular
        .module('starter')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise('/home');

            $stateProvider

                // HOME STATE ========================================
                .state('home', {
                    url: '/home',
                    component: 'home'
                })
        }]);

})();

(function() {
'use strict';

    var home = {
        templateUrl: `app/home/home.html`,
    };
        
    angular
        .module('starter')
        .component('home', home);

})();