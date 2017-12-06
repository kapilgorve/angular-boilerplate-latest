"use strict";angular.module("starter",["ui.router"]),angular.module("starter").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,r,o){o.hashPrefix(""),o.html5Mode(!0),r.otherwise("/home"),e.state("home",{url:"/home",component:"home"})}]);
"use strict";angular.module("starter").component("home",{templateUrl:"app/home/home.html"});
//# sourceMappingURL=maps/bundle.js.map
