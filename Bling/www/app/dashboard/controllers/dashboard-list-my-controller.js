var module = angular.module('app.dashboard');

module.controller('dashboard-list-my-controller', function ($scope, boardService, $state) {
    $scope.test = "hello world";

    boardService.getBoards("my", function (dashboards) {
        $scope.dashboards = dashboards;
    });

    $scope.showBoard = function (boardId) {
        $state.go('board.details', { boardId: boardId });
    }
});
