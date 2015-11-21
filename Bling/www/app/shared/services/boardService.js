// dashboardService

var module = angular.module('app.shared');

module.factory('boardService', function ($http) {
    var baseUrl = backendUrl + 'http://localhost:50313/board/';
    var serviceInstance = {

        getBoards: function (category, successCallback) {
            if (category === "my")
<<<<<<< HEAD
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
=======
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
>>>>>>> b8d6ff79719034a827052210c4e997f7368c88a8
                .then(function (success) { successCallback(success.data); });
        },
    };
    // Our first service
    return serviceInstance;
});