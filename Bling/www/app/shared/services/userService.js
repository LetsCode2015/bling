// dashboardService

var module = angular.module('app.shared');

module.factory('userService', function ($http) {
    var baseUrl = 'http://192.168.0.106:50313/user/';
    var serviceInstance = {
        getAll: function (successCallback) {
            $http.get(baseUrl + 'getall')
                .then(function (success) { successCallback(success.data); });
        },
        get: function (id, successCallback) {
            $http.get(baseUrl + 'get/' + id)
                .then(function (success) { successCallback(success.data); });
        },
        add: function (item, successCallback) {
            $http.post(baseUrl + 'create', item)
                .then(function (success) { successCallback(success.data); });
        },
        update: function (item, successCallback) {
            $http.post(baseUrl + 'update', item)
                .then(function (success) { successCallback(success.data); });
        },
        remove: function (id, successCallback) {
            $http.post(baseUrl + 'delete', id)
                .then(function (success) { successCallback(success.data); });
        },
    };
    // Our first service
    return serviceInstance;
});