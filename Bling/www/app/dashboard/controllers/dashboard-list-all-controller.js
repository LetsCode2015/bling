var module = angular.module('app.dashboard');

module.controller('dashboard-list-all-controller', function ($scope, $state, boardService) {
    $scope.test = "hello world";

    boardService.getAll(function (dashboards) {
        $scope.dashboards = dashboards;
    });

    $scope.showBoard = function (boardId) {
        $state.go('board.details', { boardId: boardId });
    }

    $scope.gotoDashboard = function () {
        $state.go('app.dashboard');
    };

    $scope.addBoard = function() {
        $state.go('board.add');
    }

});