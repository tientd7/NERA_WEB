app.controller("PostSlide", function ($scope, $http, $location, $window) {


    $scope.message = '';
    $scope.ListSlide = null;
    $scope.Item = null;

    $scope.allData = function () {
        $http.get('/Post_Slide/AllSlide')
            .success(function (data, status, headers, config) {
                $scope.Item = data;
            })
            .error(function (error) {
                $scope.message = 'Lỗi';
                console.log("error" + error);
            })
    }

    $scope.allData();


    $scope.Create = function (Item) {

        $http.post('/Post_Slide/ThemSlide', { Obj: Item })
            .success(function (data) {
                $scope.Item = data;
                $scope.Item = null;
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
                    $scope.allData();
                    $('.alert-noti-success').fadeOut(500);

                }, 1500);

                $('.popup-box').removeClass('box-dialog-keyframes');
                $('.popup-box').addClass('active-hide');

            }).error(function (error) {
                console.log(error);
            });

    };
    $scope.delete = function (Post_Id) {
        var confirmDel = confirm("Bạn có muốn xóa Slide này ?");
        if (confirmDel == true) {
            $http.post('/Post_Slide/delete', { Post_Id: Post_Id })
                .success(function (data) {
                    setTimeout(function () {
                        $('.img-preload').fadeIn(200);
                    });
                    setTimeout(function () {
                        $('.img-preload').fadeOut(200);
                    }, 800);
                    setTimeout(function () {
                        $('.alert-delete-success').fadeIn(500);
                        $('.alert-delete-success').fadeIn(500);
                    }, 801);
                    setTimeout(function () {
                        $('.alert-delete-success').fadeOut(500);
                        $scope.allData();
                        $('.alert-delete-success').fadeOut(500);

                    }, 1500);

                }).error(function (error) {
                    console.log(error);
                });
        }
    };

    $scope.getDetail = function (Id) {

        $('.popup-box').addClass('box-dialog-keyframes');
        $('.popup-box').removeClass('active-hide');
        $('.btn-add').css("display", "none");
        $('.title-add').css("display", "none");
        $('.title-update').css("display", "block");

        $http.post('/Post_Slide/Detail/', { Id: Id })
            .success(function (data, status, headers, config) {
                //debugger;

                $scope.Item = data;
            })
            .error(function (error) {
                $scope.message = 'Unexpected Error while loading data!!';

                console.log(error);
            });
    };

    // edit
    $scope.Update = function (Item) {
        $http.post('/Post_Slide/Edit', {
            Slide:Item
        }).success(function (data, status, headers, config) {
            console.log("success" + data + "status" + status);
            $scope.Item = data;
            $scope.Item = null;
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
                $scope.allData();
                $('.alert-noti-success').fadeOut(500);

            }, 1500);

            $('.popup-box').removeClass('box-dialog-keyframes');
            $('.popup-box').addClass('active-hide');

            //if (data != "") {
            //    window.location.href('/Post_Slide/Index');
            //}
            //else {
            //    $scope.message = 'Form data not Saved!';
            //}
        })
    };
});

