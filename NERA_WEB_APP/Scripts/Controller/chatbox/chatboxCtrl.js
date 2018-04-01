app.controller('CBCtrl', function ($scope, $http) {

    $scope.data;

    $scope.addData = function () {
        $http({
            url: '/Chatbox/addData',
            method: 'POST',
            data: $scope.data
        }).success(function (data, status) {
            $scope.data = data;
            console.log("success" + data);
            $scope.data = null;
        }).error(function (error) {
            console.log('error' + error);
        })
    }
})
