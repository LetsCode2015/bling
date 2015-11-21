var module = angular.module('app.dashboard');

module.controller('dashboard-list-all-controller', function ($scope, $state, boardService) {
    $scope.test = "hello world";

<<<<<<< HEAD
    boardService.getAll("all", function (dashboards) {
=======
    boardService.getAll(function (dashboards) {
>>>>>>> 43a158746033426de5e52bf9cd0a697180230b78
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