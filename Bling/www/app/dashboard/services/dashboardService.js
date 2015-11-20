// dashboardService

var module = angular.module('app.dashboard');

module.factory('dashboardService', function () {
    var serviceInstance = {
        getDashboards: function (category) {
            var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
            return [
                {
                    title: 'Dashboard1' + category,
                    description: description
                },
                {
                    title: 'Dashboard2' + category,
                    description: description
                },
                {
                    title: 'Dashboard3' + category,
                    description: description
                },
                {
                    title: 'Dashboard4' + category,
                    description: description
                },
                {
                    title: 'Dashboard5' + category,
                    description: description
                },
                {
                    title: 'Dashboard6' + category,
                    description: description
                }
            ];
        }

    };
    // Our first service
    return serviceInstance;
});