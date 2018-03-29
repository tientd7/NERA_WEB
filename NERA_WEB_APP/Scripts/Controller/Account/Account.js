


// controller User


app.controller("AccountController", function ($scope, $http) {
    $scope.UserName;
    $scope.Password;
    $scope.message;
    $scope.user;

    debugger;
    $scope.login = function () {
        $http({
            url: '/Account/LogIn',
            method: 'POST',
            data: {
                model: $scope.user
            }
        }).success(function (data, status) {
            debugger;
            if (data != null) {
                $scope.message = "success";
                console.log('login success');
                window.location.href = '/Home/Index';
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