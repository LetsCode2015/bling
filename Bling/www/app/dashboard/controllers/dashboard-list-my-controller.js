var module = angular.module('app.dashboard');

module.controller('dashboard-list-my-controller', function ($scope, boardService) {
    $scope.test = "hello world";

    boardService.getBoards("my", function (dashboards) {
        $scope.dashboards = dashboards;
    });
});