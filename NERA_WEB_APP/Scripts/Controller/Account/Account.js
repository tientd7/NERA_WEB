


// controller User


app.controller("AccountController", function ($scope, $http) {
    $scope.UserName;
    $scope.Password;
    $scope.message;
    $scope.user;
    $scope.login = function () {
        $http({
            url: '/Account/LogIn',
            method: 'POST',
            data: {
                'UserName': $scope.UserName,
                'Password': $scope.Password,
                'message': $scope.message
            }
        }).success(function (data, status) {

            if (data != null) {
                $scope.message = "success";
                console.log('login success');
            } else {
                $scope.message = "failed";
                console.log('login failed!');
            }
            }).error(function (error, status) {
                console.log('error' + error);
                console.log('status error' + status);
            })
    }

})