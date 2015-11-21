// dashboardService

var module = angular.module('app.shared');

module.factory('boardService', function ($http) {
    var baseUrl = backendUrl + 'http://localhost:50313/board/';
    var serviceInstance = {

        getBoards: function (category, successCallback) {
            if (category === "my")
                $http.get(baseUrl + 'getall')
                    .then(function (success) { successCallback(success.data); });
            else
                $http.get(baseUrl +'getall')
                    .then(function (success) { successCallback(success.data); });
        },
        getBoard: function (boardId, successCallback) {
            $http.get(baseUrl + 'get/' + boardId)
                .then(function (success) { successCallback(success.data); });
        },
        addBoard: function (newBoard, successCallback) {
            $http.post(baseUrl + 'create', newBoard)
                .then(function (success) { successCallback(success.data); });
        },
    };
    // Our first service
    return serviceInstance;
});