app.controller('CBCtrl', function ($scope, $http) {

    $scope.data;

    $scope.addData = function (Item) {
        $http({
            url: '/Chatbox/addData',
            method: 'GET',
            data: $scope.data
        }).success(function (data, status) {
            console.log("success" + data);
        }).error(function (error) {
            console.log('error' + error);
        })
    }
})
