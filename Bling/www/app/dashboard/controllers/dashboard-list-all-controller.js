var module = angular.module('app.dashboard');

module.controller('dashboard-list-all-controller', function ($scope, boardService) {

    $scope.test = "hello world";

    $scope.dashboards = boardService.getBoards("all");
});