app.controller("UserController", function ($scope, $http) {

    $scope.isExistingInfor = true;
    $scope.isExistingPass = true;
    $scope.pass_error_min_length;
    $scope.confirm_pass_error;

    // get thông tin người dùng
    $scope.user;
    $scope.getInforUser = function (id) {
        this.id = id;
        if (this.id != null) {
            this.isExistingInfor = false;
        }
        $http.post("/Account/getInforUser", { id: id })
            .success(function (data, status) {
                $scope.user = data;
            }).error(function (error) {
                console.log(error);
            });

    }


    $scope.u;
    $scope.getpass = function (id) {
        this.id = id;
        if (this.id != null) {
            this.isExistingPass = false;
        }

        $http.post("/Account/getInforUser", { id: id })
            .success(function (data, status) {
                $scope.u = data;
            }).error(function (error) {
                console.log(error);
            });
    }

    $scope.changePass = function (u) {
        $http.post("/Account/changePass", { user: u })
            .success(function (data, status) {
                $scope.u = data;
                if ($scope.u == 'pass error'.toString()) {
                    setTimeout(function () {
                        $('.alert-password').fadeIn(500);
                    });

                    setTimeout(function () {
                        $('.alert-password').fadeOut(500);
                    }, 2000);
                    $scope.u = null;

                } else if ($scope.u == 'error_min_length'.toString()) {
                    $scope.pass_error_min_length = "Mật khẩu phải lớn hơn 6 ký tự.";
                    setTimeout(function () {
                        $('.alert-noti-password').fadeIn(500);
                    });

                    setTimeout(function () {
                        $('.alert-noti-password').fadeOut(500);
                    }, 2000);
                    $scope.u = null;



                } else if ($scope.u == 'confirm_password_incorrect'.toString()) {

                    $scope.confirm_pass_error = "Xác nhận mật khẩu không trùng nhau.";

                    setTimeout(function () {
                        $('.alert-error-confrimpassword').fadeIn(500);
                    });

                    setTimeout(function () {
                        $('.alert-error-confrimpassword').fadeOut(500);
                    }, 2000);
                    $scope.u = null;

                } else {

                    // jquery
                    setTimeout(function () {
                        $('.img-preload').fadeIn(200);
                    });
                    setTimeout(function () {
                        $('.img-preload').fadeOut(200);
                    }, 800);
                    setTimeout(function () {
                        $('.alert-update-success').fadeIn(500);
                        $('.alert-noti-success').fadeIn(500);
                    }, 801);
                    setTimeout(function () {
                        $('.alert-update-success').fadeOut(500);
                        $('.alert-noti-success').fadeOut(500);

                        //reload

                    }, 1500);


                    this.isExistingInfor = true;
                    this.isExistingPass = true;
                }
               
            }).error(function (error) {
                console.log(error);
            });
    }


    $scope.save = function (user) {
        $http.post("/Account/UserUpdate", { user: user })
            .success(function (data, status) {

                // jquery
                setTimeout(function () {
                    $('.img-preload').fadeIn(200);
                });
                setTimeout(function () {
                    $('.img-preload').fadeOut(200);
                }, 800);
                setTimeout(function () {
                    $('.alert-update-success').fadeIn(500);
                    $('.alert-noti-success').fadeIn(500);
                }, 801);
                setTimeout(function () {
                    $('.alert-update-success').fadeOut(500);
                    $('.alert-noti-success').fadeOut(500);

                    //reload

                }, 1500);



                this.isExistingInfor = true;
                this.isExistingPass = true;

                location.reload();
            }).error(function (error) {
                console.log(error);
            })

    }






    $scope.cancel = function () {

        this.isExistingInfor = true;
        this.isExistingPass = true;

    }
})