var module = angular.module('app.tasks');

module.controller('task-controller', function ($scope, $ionicHistory, $ionicNavBarDelegate, $state, boardService) {
    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
});