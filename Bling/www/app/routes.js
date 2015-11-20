var appModule = angular.module('app');

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
     .state('app.playlists', {
         url: "/playlists",
         views: {
             'menuContent': {
                 templateUrl: "app/dashboard/partials/dashboard-list.html",
                 controller: 'dashboard-list-all-controller'
             }
         }
     });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
});
