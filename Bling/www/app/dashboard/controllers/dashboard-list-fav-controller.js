var module = angular.module('app.dashboard');

module.controller('dashboard-list-fav-controller', function ($scope, boardService) {
    $scope.test = "hello world";

    boardService.getBoards("fav", function (dashboards) {
        $scope.dashboards = dashboards;
    });
});