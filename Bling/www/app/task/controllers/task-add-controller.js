var module = angular.module('app.task');

module.controller('task-add-controller', function ($scope, $ionicHistory, $ionicNavBarDelegate, $state, taskService) {

 

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
});