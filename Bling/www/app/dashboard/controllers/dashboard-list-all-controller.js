var module = angular.module('app.dashboard');

module.controller('dashboard-list-all-controller', function ($scope, dashboardService) {

    $scope.test = "hello world";

    $scope.dashboards = dashboardService.getDashboards("all");
});