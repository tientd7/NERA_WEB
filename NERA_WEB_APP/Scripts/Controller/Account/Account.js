﻿


// controller User

app.controller("AccountController", function ($scope, $http) {
    $scope.UserName;
    $scope.Password;
    $scope.message;
    $scope.user;
    $scope.LstUsers;


    $scope.login = function () {

        if ($('#username').val() == '') {
            alert("Username không được để trống");
        }
        else if ($('#password').val() == '') {
            alert("Password không được để trống");
        }
        else {
            setTimeout(function () {
                $('.form-signin-user').css({ 'opacity': '.2' });
                $('.img-preload').fadeIn(200);
            });
            setTimeout(function () {
                $('.form-signin-user').css({ 'opacity': '1' });
                $('.img-preload').fadeOut(200);
            }, 800);

            $http({
                url: '/Account/LogOn',
                method: 'POST',
                data: {
                    model: $scope.user
                }
            }).success(function (data, status) {
                $scope.user = data;
                if ($scope.user == 'user error'.toString()) {
                    setTimeout(function () {
                        $('.alert-username').fadeIn(500);
                    }, 801);

                    setTimeout(function () {
                        $('.alert-username').fadeOut(500);
                    }, 2000);

                } else if ($scope.user == 'pass error'.toString()) {
                    setTimeout(function () {
                        $('.alert-password').fadeIn(500);
                    }, 801);

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


    $scope.isExisting = true;
    $scope.id;
    $scope.getDetails = function (id) {
        this.id = id;
        if (this.id != null) {
            this.isExisting = false;
        }
    }

    $scope.cancel = function () {
        var ok = confirm("Bạn có muốn hủy sửa thông tin này?");
        if (ok == true) {
            this.isExisting = true;
            $scope.showData();
        }
    }

    // hiển thị dữ liệu
    $scope.showData = function () {

        $http.get('/Account/showData')
            .success(function (data, status) {
                $scope.LstUsers = data;
            }).error(function (error, status) {
                console.log(error);
            })
    }
    $scope.showData();
    $scope.pass = null;
    $scope.user_error;
    $scope.pass_error_min_length;
    $scope.pass_error;
    $scope.role_code_error;

    // đăng ký thành viên
    $scope._user = null;
    $scope.signUp = function (_user) {

        if ($('.txt-name').val() == "".trim()) {

            $scope.user_error = "Tài khoản phải lớn hơn 5 ký tự.";
            setTimeout(function () {
                $('.alert-noti-error').fadeIn(500);             
            },200);

            setTimeout(function () {
                $('.alert-noti-error').fadeOut(500);      
            }, 2000);
           
        }
        else if ($('.password').val() == "".trim()) {
            $scope.pass_error_min_length = "Mật khẩu phải lớn hơn 6 ký tự.";
            setTimeout(function () {
                $('.alert-noti-password').fadeIn(500);
            }, 200);

            setTimeout(function () {
                $('.alert-noti-password').fadeOut(500);
            }, 2000);
           
           

        } else if ($('.password').val() == "".trim() != $('#confirmpassowrd').val() == "".trim()) {
            $scope.pass_error = "Xác nhận mật khẩu không trùng nhau.";

            setTimeout(function () {
                $('.alert-error-confrimpassword').fadeIn(500);
            }, 200);

            setTimeout(function () {
                $('.alert-error-confrimpassword').fadeOut(500);
            }, 2000);
           
           
        } else if ($('#select-category-role').val() == "".trim()) {
             $scope.role_code_error = "Quyền không được để trống";
            setTimeout(function () {
                $('.alert-null-error-rolecode').fadeIn(500);
            }, 200);

            setTimeout(function () {
                $('.alert-null-error-rolecode').fadeOut(500);
            }, 2000);    

        } else {
            $http.post('/Account/SignUp', { model: _user })
                .success(function (data, status) {
                    console.log(data);
                    if (data == "username error".toString()) {
                        $('.alert-noti-error').show();
                        $scope.user_error = "Tài khoản phải lớn hơn 5 ký tự.";
                    }
                    else if (data == "error min length".toString()) {
                        $('.alert-noti-password').show();
                        $scope.pass_error_min_length = "Mật khẩu phải lớn hơn 6 ký tự.";
                    }
                    else if (data == "password incorrect".toString()) {
                        $('.alert-error-confrimpassword').show();
                        $scope.pass_error = "Xác nhận mật khẩu không trùng nhau.";
                    }
                    else if (data == "rolecodenull".toString()) {
                        $('.alert-null-error-rolecode').show();
                        $scope.role_code_error = "Quyền không được để trống";
                    }
                    else {

                        // jquery
                        setTimeout(function () {
                            $('.img-preload').fadeIn(200);
                        });
                        setTimeout(function () {
                            $('.img-preload').fadeOut(200);
                        }, 800);
                        setTimeout(function () {
                            $('.alert-add-success').fadeIn(500);
                            $('.alert-noti-success').fadeIn(500);
                        }, 801);
                        setTimeout(function () {
                            $('.alert-add-success').fadeOut(500);
                            $('.alert-noti-success').fadeOut(500);

                            //reload
                            $scope.showData();
                        }, 1500);

                        $('.popup-box').removeClass('box-dialog-keyframes');
                        $('.popup-box').addClass('active-hide');
                        $scope._user = data;
                        $scope._user = null;

                    }

                }).error(function (error) {
                    console.log(error);
                })

        }

    }

})