// dashboardService

var module = angular.module('app.shared');

module.factory('boardService', function ($resource) {
    var serviceInstance = {
        getBoards: function (category) {
            if (category === "my")
                return $resource("http://localhost:50313/board/getall");
            else
                return $resource("http://localhost:50313/board/getall");
        }
    };
    // Our first service
    return serviceInstance;
});