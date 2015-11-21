var module = angular.module('app.dashboard');

module.controller('dashboard-list-all-controller', function ($scope, $state, boardService) {

    $scope.test = "hello world";

    $scope.dashboards = boardService.getBoards("all");

    $scope.showBoard = function (boardId) {
        $state.go('board.details');
//        $state.go('board.details', { boardId: boardId });
    }
});