var module = angular.module('app.dashboard');

module.controller('dashboard-layout-controller', function ($scope, $state) {

    $scope.test = "hello world";

    $scope.addBoard = function () {
        alert("Add");
//        $state.go('board.add');
    };
});