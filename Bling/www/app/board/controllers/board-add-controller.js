var module = angular.module('app.dashboard');

module.controller('board-add-controller', function ($scope, $ionicHistory, $ionicNavBarDelegate, $state, boardService) {

 


    $scope.goBack = function () {
        //        $ionicNavBarDelegate.back();
        //        $ionicHistory.goBack();
        //        $state.go('app/dashboard');
        $ionicHistory.goBack();
    };
});