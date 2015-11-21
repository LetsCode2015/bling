var module = angular.module('app.dashboard');

module.controller('board-add-controller', function ($scope, $ionicHistory, $ionicNavBarDelegate, $state, boardService) {
    $scope.newBoard = {};

    $scope.createBoard = function () {
        boardService.addBoard($scope.newBoard, function (boardId) {
            $scope.newBoard.id = boardId;
            $state.go('app.dashboard', {}, { reload: true });
        });
    };

    $scope.goBack = function () {
        //        $ionicNavBarDelegate.back();
        //        $ionicHistory.goBack();
        //        $state.go('app/dashboard');
        $ionicHistory.goBack();
    };
});