var module = angular.module('app.task');

module.controller('task-controller', function ($scope, $ionicHistory, $ionicNavBarDelegate, $state, taskService) {

//    $scope.name = "test";
//    $scope.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam";

    if ($state.params.taskId) {
        var taskId = $state.params.taskId;

        taskService.getTask(taskId, function(task) {
            $scope.title = task.title;
            $scope.description = task.description;

        });
    }


    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
});