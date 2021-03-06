﻿
app.controller("ServiceController", function ($scope, $http) {
    $scope.Item;
    //tạo biến item dv
    $scope.ItemDV;
    // hàm gọi lấy danh sách dich vụ
    $scope.showDV = function () {
        $http.get('/Services/showDV').success(function (data, status) {
            $scope.ItemDV = data;
        }).error(function (error, status) {
            console.log("error :" + error + status);
        })
    };
    // chạy hàm
    $scope.showDV();



    // hàm gọi lấy danh sách dich vụ tồn tại
    $scope.ItemDVEnable;
    $scope.showDvEnable = function () {
        $http.get('/Services/showDvEnable').success(function (data, status) {
            $scope.ItemDVEnable = data;
        }).error(function (error, status) {
            console.log("error :" + error + status);
        })
    };
    // chạy hàm
    $scope.showDvEnable();


    //del
    $scope.del = function (i) {
        var dialog_noti = confirm("Bạn có muốn xóa thông tin này?");
        if (dialog_noti === true) {
            $http.post('/Services/del', { menuItem: i })
                .success(function (data) {
                    var x = location.href;
                    window.location.href = x;
                    location.reload();
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
                        $scope.showDV();
                        $('.alert-delete-success').fadeOut(500);

                    }, 1500);

                }).error(function (error) {
                    console.log(error);
                })
        }

    }

    $scope.readDetails = function (Id) {
      
        $('.popup-box').addClass('box-dialog-keyframes');
        $('.popup-box').removeClass('active-hide');
        $('.btn-add').css("display", "none");
        $('.btn-update').css("display", "none");
        $('.title-add').css("display", "none");
        $('.title-update').css("display", "none");
        $('.title-details').css("display", "block");
        $('.item').attr('disabled', true);
        $('.item').css({ 'background': '#fff' });


        $http.post('/Services/getDetails', { Id: Id })
            .success(function (data) {

                $scope.Item = data;
            }).error(function (error) {
                console.log('error' + error);
            });
    }
})