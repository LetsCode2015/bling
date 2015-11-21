﻿var appModule = angular.module('app');

appModule.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        // if (window.cordova && window.cordova.plugins.Keyboard) {
        // cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        // cordova.plugins.Keyboard.disableScroll(true);

        //  }
        //  if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        //   StatusBar.styleDefault();
        //}
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');


    $stateProvider
     .state('app', {
         url: "/app",
         abstract: true,
         templateUrl: "app/dashboard/partials/dashboard-layout.html",
         controller: 'board-controller'
     })
     .state('app.dashboard', {
         url: "/dashboard",
         views: {
             myDashboardTab: {
                 templateUrl: "app/dashboard/partials/dashboard-list.html",
                 controller: 'dashboard-list-my-controller'
             },
             favDashboardTab: {
                 templateUrl: "app/dashboard/partials/dashboard-list.html",
                 controller: 'dashboard-list-fav-controller'
             },
             allDashboardTab: {
                 templateUrl: "app/dashboard/partials/dashboard-list.html",
                 controller: 'dashboard-list-all-controller'
             }
         }
     })
/*         .state('app.details', {
             url: "/dashboard/details",
             views: {
                 myDashboardTab: {
                     templateUrl: "app/board/partials/board-layout.html",
                     controller: 'dashboard-list-my-controller'
                 },
                 favDashboardTab: {
                     templateUrl: "app/board/partials/board-layout.html",
                     controller: 'dashboard-list-fav-controller'
                 },
                 allDashboardTab: {
                     templateUrl: "app/board/partials/board-layout.html",
                     controller: 'dashboard-list-all-controller'
                 }
             }
         })*/


    .state('board', {
        url: "/board",
        abstract: true,
        templateUrl: "app/board/partials/board-layout.html",
        controller: 'board-controller'
    }).state('board.details', {
        url: "/board/details/:boardId",
        views: {
            boardPlaceholder: {
                templateUrl: "app/board/partials/board.html",
                controller: 'board-controller'
            }
        }
    })

    ;


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
});
