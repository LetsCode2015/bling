// dashboardService

var module = angular.module('app.shared');

module.factory('taskService', function ($http) {
    var serviceInstance = {
        getTasks: function (boardId, successCallback) {
            $http.get('http://192.168.0.106:50313/task/GetByBoardId/' + boardId)
                .then(function (success) { successCallback(success.data); });
        },
        getTask: function (taskId, successCallback) {
            $http.get('http://192.168.0.106:50313/task/get/' + taskId)
                .then(function (success) { successCallback(success.data); });
        },
        addTask: function (newTask, successCallback) {
            $http.post('http://192.168.0.106:50313/task/create', newTask)
                .then(function (success) { successCallback(success.data); });
        },
        updateTask: function (taskToUpdate, successCallback) {
            $http.post('http://192.168.0.106:50313/task/update', taskToUpdate)
                .then(function (success) { successCallback(success.data); });
        }
    };
    // Our first service
    return serviceInstance;
});