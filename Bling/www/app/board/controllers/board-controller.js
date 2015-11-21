var module = angular.module('app.dashboard');

module.controller('board-controller', function ($scope, $ionicHistory, $ionicNavBarDelegate, $state, boardService) {

    if ($state.params.boardId) {
        var boardId = $state.params.boardId;
        //        var board = boardService.getBoard(boardId);

        boardService.getBoard(boardId, function (dashboards) {
            var board = dashboards;

            $scope.name = board.name;
            $scope.description = board.description;

            var getStatusInfo = function (status) {
                if (Number(status) === 0) {
                    return {
                        statusName: 'New',
                        statusClassName: 'task-new'
                    };
                } else if (Number(status) === 1) {
                    return {
                        statusName: 'In progress',
                        statusClassName: 'task-inprogress'
                    };
                } else if (Number(status) === 2) {
                    return {
                        statusName: 'Completed',
                        statusClassName: 'task-completed'
                    };
                } else //if (Number(status) === 3) {
                {
                    return {
                        statusName: 'Rejected',
                        statusClassName: 'task-rejected'
                    };
                }
            }

            $scope.tasks = [];
            _.each(board.tasks, function (item) {
                var statusInfo = getStatusInfo(item.status);
                item.statusName = statusInfo.statusName;
                item.statusClassName = statusInfo.statusClassName;
                $scope.tasks.push(item);
            });
        });



    };


    $scope.gotoTaskDetails = function (taskId) {

        $state.go('tasks.details', { taskId: taskId });
    };


    $scope.goBack = function () {
        //        $ionicNavBarDelegate.back();
        //        $ionicHistory.goBack();
        //        $state.go('app/dashboard');
        $ionicHistory.goBack();
    };
});