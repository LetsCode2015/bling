
angular.module('app', ['ionic', 'app.shared', 'app.dashboard', "app.task", 'ngResource']);
//    .config(function ($httpProvider) {
//    $httpProvider.defaults.useXDomain = true;
//    delete $httpProvider.defaults.headers
//     .common['X-Requested-With'];
//});

window.backendUrl = 'http://192.168.0.106:50313/';
