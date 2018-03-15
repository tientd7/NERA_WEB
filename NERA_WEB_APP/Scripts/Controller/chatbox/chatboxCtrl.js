app.controller('CBCtrl', function ($scope, $http) {
    
    $scope.data;

    $scope.addData = function () {
        $http({
            url: '/Chatbox/addData',
            method: 'POST',
            data : $scope.Item
        }).success(function (data, status) {
            console.log("success"+data);
        }).error(function (error) {
            console.log('error' + error);
        })
    }
})