// dashboardService

var module = angular.module('app.shared');

module.factory('boardService', function ($http) {
    var serviceInstance = {
        getBoards: function (category, successCallback) {
            if (category === "my")
                $http.get('http://192.168.0.106:50313/board/getall')
                    .then(function (success) { successCallback(success.data); });
            else
                $http.get('http://192.168.0.106:50313/board/getall')
                    .then(function (success) { successCallback(success.data); });
        },
        getBoard: function (boardId, successCallback) {
            $http.get('http://192.168.0.106:50313/board/get/' + boardId)
                .then(function (success) { successCallback(success.data); });
        },
        addBoard: function (newBoard, successCallback) {
            $http.post('http://192.168.0.106:50313/board/create', newBoard)
                .then(function (success) { successCallback(success.data); });
        },
    };
    // Our first service
    return serviceInstance;
});