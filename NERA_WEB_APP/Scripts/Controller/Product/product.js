


app.controller("ProductCtrl", function ($scope, $http) {


    $scope.isExisting = true;


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



    // tạo biến item sản phẩm
    $scope.ItemSP;
    // hàm gọi lấy danh sách sản phẩm
    $scope.hienthisanpham = function () {
        $http.get('/Product/hienthisanpham').success(function (data, status) {
            $scope.ItemSP = data;
        }).error(function (error) {
            console.log("error :" + error);
        })
    };
    // chạy hàm
    $scope.hienthisanpham();

    // Hiển thị sản phẩm tồn tại
    $scope.ItemSPEnable;
    $scope.productEnable = function () {
        $http.get('/Product/productEnable').success(function (data, status) {
            $scope.ItemSPEnable = data;
        }).error(function (error) {
            console.log("error :" + error);
        })
    };
    // chạy hàm
    $scope.productEnable();







    // lấy ảnh
    $scope.listImg;
    $scope.showImg = function () {
        $http.get('/Product/getImages')
            .success(function (data) {
                $scope.listImg = data;

            }).error(function (error) {
                console.log(error);
            })
    }
    $scope.showImg();


    // Them 
    $scope.Item = null;
    $scope.Create = function (Item) {


        //if ($('.txt-name').val() === ''.trim()) {
        //    $('.alert-noti-error').fadeIn(500);
        //    $('.alert-noti-error').fadeOut(3000);
        //    $('.txt-name').focus();

        //} else if ($('select.select-category').val() == '') {
        //    $('.alert-null-error-cate').fadeIn(500);
        //    $('.alert-null-error-cate').fadeOut(3000);
        //    $('.select-category').focus();
        //} else if ($('select.select-lang').val() == '') {
        //    $('.alert-null-error-lang').fadeIn(500);
        //    $('.alert-null-error-lang').fadeOut(3000);
        //    $('.select-lang').focus();
        //} else {
        $http.post('/Product/addNewProduct', { Obj: Item })
            .success(function (data, status, headers, config) {
                $scope.Item = data;
                $scope.Item = null;

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
                    $scope.hienthisanpham();
                    $scope.showDV();
                }, 1500);

                $('.popup-box').removeClass('box-dialog-keyframes');
                $('.popup-box').addClass('active-hide');

            }).error(function (error, status, headers, config) {
                $scope.message = 'Unexpected Error while saving data!!' + data.errors;
                console.log(error);
            });

    }

    $scope.getValue = function (item) {
        alert(item);
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


        $http.post('/Product/getDetails', { Id: Id })
            .success(function (data) {

                $scope.Item = data;
            }).error(function (error) {
                console.log('error' + error);
            });
    }

    // get details
    $scope.Item = "";
    $scope.getDetails = function (Id) {
        $('.popup-box').addClass('box-dialog-keyframes');
        $('.popup-box').removeClass('active-hide');
        $('.btn-add').css("display", "none");
        $('.txt-name').focus();
        $('.title-add').css("display", "none");
        $('.title-update').css("display", "block");


        $http.post('/Product/getDetails', { Id: Id })
            .success(function (data) {
                this.isExisting = false;
                $scope.Item = data;
            }).error(function (error) {
                console.log('error' + error);
            });
    }

    this.id = null;
    $scope.get = function (id) {
        this.id = id;
        if (this.id != null) {
            this.isExisting = false;
        }
    }

    $scope.cancel = function () {
        var ok = confirm("Bạn có muốn hủy sửa thông tin này?");
        if (ok == true) {
            this.isExisting = true;
            $scope.hienthisanpham();
        }

    }

    // update
    $scope.update = function (Item) {
        $http.post('/Product/update', { Menu: Item })
            .success(function (data) {
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
                    $scope.hienthisanpham();
                    $scope.showDV();
                }, 1500);


                $('.popup-box').removeClass('box-dialog-keyframes');
                $('.popup-box').addClass('active-hide');

                //reset value
                $scope.Item = data;
                $scope.Item = null;
            }).error(function (error) {
                console.log('error update ' + error);
            })
    }



    // update enable to false
    $scope.del = function (i) {
        var dialog_noti = confirm("Bạn có muốn xóa thông tin này?");
        if (dialog_noti === true) {
            $http.post('/Product/del', { menuItem: i })
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
                        $scope.hienthisanpham();
                        $scope.showDV();
                        $('.alert-delete-success').fadeOut(500);

                    }, 1500);

                }).error(function (error) {
                    console.log(error);
                })
        }


        $scope.CreateUser = function (user) {
            $http.post('/Product/CreateUse', { obj: user })
                .success(function (data) {
                })
    };

    }




