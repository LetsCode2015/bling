var module = angular.module('app.dashboard');

module.controller('dashboard-list-fav-controller', function ($scope, boardService, $state) {
    $scope.test = "hello world";

<<<<<<< HEAD
    boardService.getAll("fav", function (dashboards) {
=======
    boardService.getFav(function (dashboards) {
>>>>>>> 43a158746033426de5e52bf9cd0a697180230b78
        $scope.dashboards = dashboards;
    });

    $scope.showBoard = function (boardId) {
        $state.go('board.details', { boardId: boardId });
    }

    $scope.addBoard = function () {
        $state.go('board.add');
    }
});