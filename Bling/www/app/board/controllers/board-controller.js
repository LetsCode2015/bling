var module = angular.module('app.dashboard');

module.controller('board-controller', function ($scope, $ionicHistory, $ionicNavBarDelegate, $state, boardService) {

    if ($state.params.boardId) {
        var boardId = $state.params.boardId;
        var board = boardService.getBoard(boardId);

        $scope.title = board.title;
        $scope.description = board.description;
    }



    $scope.goBack = function () {
        $ionicNavBarDelegate.back();
    };
});