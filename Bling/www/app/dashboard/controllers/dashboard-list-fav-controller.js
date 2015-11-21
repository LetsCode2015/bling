var module = angular.module('app.dashboard');

module.controller('dashboard-list-fav-controller', function ($scope, boardService, $state) {
    $scope.test = "hello world";

    boardService.getBoards("fav", function (dashboards) {
        $scope.dashboards = dashboards;
    });

    $scope.showBoard = function (boardId) {
        $state.go('board.details', { boardId: boardId });
    }
});