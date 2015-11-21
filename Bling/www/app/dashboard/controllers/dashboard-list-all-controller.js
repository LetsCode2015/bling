var module = angular.module('app.dashboard');

module.controller('dashboard-list-all-controller', function ($scope, $state, boardService) {
    $scope.test = "hello world";

    boardService.getBoards("all", function (dashboards) {
        $scope.dashboards = dashboards;
    });

    $scope.showBoard = function (boardId) {
        $state.go('board.details', { boardId: boardId });
    }
});