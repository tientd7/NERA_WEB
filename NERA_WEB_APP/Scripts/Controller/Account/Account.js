


// controller User

app.controller("AccountController", function ($scope, $http) {
    $scope.UserName;
    $scope.Password;
    $scope.message;
    $scope.user;

    debugger;
    $scope.login = function () {
        if ($('#username').val() == '') {
            alert("Username không được để trống");
        }
        else if ($('#password').val() == '') {
            alert("Password không được để trống");
        }
        else {

            $http({
                url: '/Account/LogOn',
                method: 'POST',
                data: {
                    model: $scope.user
                }
            }).success(function (data, status) {
                debugger;

                $scope.user = data;
                if ($scope.user == 'user error'.toString()) {
                    setTimeout(function () {
                        $('.alert-username').fadeIn(500);
                    }, 200);

                    setTimeout(function () {
                        $('.alert-username').fadeOut(500);
                    }, 2000);

                } else if ($scope.user == 'pass error'.toString()) {
                    setTimeout(function () {
                        $('.alert-password').fadeIn(500);
                    }, 200);

                    setTimeout(function () {
                        $('.alert-password').fadeOut(500);
                    }, 2000);
                } else {
                    
                    var x = location.href;
                    window.location.href = x;
                    location.reload();
                }
                $scope.user = null;
                //window.location.href = '/Home/Index';

            }).error(function (error, status) {
                console.log('error' + error);
                console.log('status error' + status);
            })
        }


    }


    $scope.logOut = function () {
        $http.post('/Account/LogOut').success(function (data) {
            if (data != null) {
                window.location.href = "/Home/Index";
            }
        }).error(function (error) {
            console.log(error);
        })
    }

})