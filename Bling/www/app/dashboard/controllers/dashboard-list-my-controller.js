var module = angular.module('app.dashboard');

module.controller('dashboard-list-my-controller', function ($scope, boardService) {

    $scope.test = "hello world";

    $scope.dashboards = boardService.getBoards("my");
});