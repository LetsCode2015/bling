// dashboardService

var module = angular.module('app.shared');

module.factory('boardService', function () {
    var serviceInstance = {
        getBoards: function (category) {
            var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
            return [
                {
                    id: 0,
                    title: 'Dashboard1' + category,
                    description: description
                },
                {
                    id: 1,
                    title: 'Dashboard2' + category,
                    description: description
                },
                {
                    id: 2,
                    title: 'Dashboard3' + category,
                    description: description
                },
                {
                    id: 3,
                    title: 'Dashboard4' + category,
                    description: description
                },
                {
                    id: 4,
                    title: 'Dashboard5' + category,
                    description: description
                },
                {
                    id: 5,
                    title: 'Dashboard6' + category,
                    description: description
                }
            ];
        }

    };
    // Our first service
    return serviceInstance;
});