// dashboardService

var module = angular.module('app.shared');

module.factory('boardService', function () {
    var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

    var descCollection = [
        {
            id: 0,
            title: 'Dashboard1',
            description: description,
            tasks: [
                {
                    title: 'task1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci',
                    status: 0
                },
                {
                    title: 'task2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci',
                    status: 2
                },
                {
                    title: 'task2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci',
                    status: 3
                },
                {
                    title: 'task2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci',
                    status: 1
                },
                {
                    title: 'task2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci',
                    status: 0
                }
            ]
        },
        {
            id: 1,
            title: 'Dashboard2',
            description: description,
            tasks: [
                {
                    title: 'task1',
                    description: 'task1',
                    status: 0
                },
                {
                    title: 'task2',
                    description: 'task2',
                    status: 0
                }
            ]
        },
        {
            id: 2,
            title: 'Dashboard3',
            description: description,
            tasks: [
                {
                    title: 'task1',
                    description: 'task1',
                    status: 0
                },
                {
                    title: 'task2',
                    description: 'task2',
                    status: 0
                }
            ]
        },
        {
            id: 3,
            title: 'Dashboard4',
            description: description,
            tasks: [
                {
                    title: 'task1',
                    description: 'task1',
                    status: 0
                },
                {
                    title: 'task2',
                    description: 'task2',
                    status: 0
                }
            ]
        },
        {
            id: 4,
            title: 'Dashboard5',
            description: description
        },
        {
            id: 5,
            title: 'Dashboard6',
            description: description
        }
    ];

    var getBoards = function (category) {
        return _.each(descCollection, function () {
            this.title = this.title + category;
        });
    };

    var getBoard = function (boardId) {
        return _.find(descCollection, function (item) {
            return item.id === Number(boardId);
        });
    };

    var serviceInstance = {
        getBoards: getBoards,
        getBoard: getBoard
    };
    // Our first service
    return serviceInstance;
});