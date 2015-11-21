var module = angular.module('app.dashboard');

module.controller('dashboard-list-my-controller', function ($scope, boardService, $state) {

    $scope.test = "hello world";

    $scope.dashboards = boardService.getBoards("my");

    $scope.showBoard = function (boardId) {
        $state.go('board.details', { boardId: boardId });
    }
});