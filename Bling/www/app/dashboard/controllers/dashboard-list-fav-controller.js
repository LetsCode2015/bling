var module = angular.module('app.dashboard');

module.controller('dashboard-list-fav-controller', function ($scope, dashboardService) {

    $scope.test = "hello world";

    $scope.dashboards = dashboardService.getDashboards("fav");
});