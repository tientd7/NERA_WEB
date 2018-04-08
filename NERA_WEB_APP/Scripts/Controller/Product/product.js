﻿


app.controller("ProductCtrl", function ($scope, $http) {
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
    


    //tạo biến item dv
    $scope.ItemDV;
    // hàm gọi lấy danh sách dich vụ
    $scope.showDV = function () {
        $http.get('/Product/showDV').success(function (data, status) {
            $scope.ItemDV = data;
        }).error(function (error, status) {
            console.log("error :" + error + status);
        })
    };
    // chạy hàm
    $scope.showDV();



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
                        $('.alert-add-success').fadeIn(500);
                        $('.alert-noti-success').fadeIn(500);
                    });
                    setTimeout(function () {
                        $('.alert-add-success').fadeOut(500);
                        $('.alert-noti-success').fadeOut(500);

                        //reload
                        $scope.hienthisanpham();
                        $scope.showDV();
                    }, 1500);

                    $('.popup-box').removeClass('box-dialog-keyframes');
                    $('.popup-box').addClass('active-hide');


                    //if (data != "") {

                    //    if (data.Item_Type == "DV") {
                    //        window.location.href = '/Product/services';
                    //    }
                    //    else if (data.Item_Type == "SP") {
                    //        window.location.href = '/Product/product';
                    //    }

                    //}
                    //else {
                    //    console.log('Form data not Saved!');

                    //}
                }).error(function (error, status, headers, config) {
                    $scope.message = 'Unexpected Error while saving data!!' + data.errors;
                    console.log(error);
                });

        //}
    }

    //var editor = CKEDITOR.replace('Item_Content',
    //    {

    //        customConfig: '/Scripts/Controller/BaiViet/ckeditor/ckeditor.js',
    //        cloudServices_tokenUrl: '/Scripts/Controller/BaiViet/ckeditor/config.js',
    //    }, {

    //        htmlEncodeOutput: true
    //    });

    
    $scope.getValue = function (item) {
        alert(item);
    }
    // add new services
    $scope.CreateNewServices = function (Item) {


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
                    },801);
                    setTimeout(function () {
                        $('.alert-add-success').fadeOut(500);
                        $('.alert-noti-success').fadeOut(500);
                    }, 1500);

                    $('.popup-box').removeClass('box-dialog-keyframes');
                    $('.popup-box').addClass('active-hide');


                    //if (data != "") {

                    //    if (data.Item_Type == "DV") {
                    //        window.location.href = '/Product/services';
                    //    }
                    //    else if (data.Item_Type == "SP") {
                    //        window.location.href = '/Product/product';
                    //    }

                    //}
                    //else {
                    //    console.log('Form data not Saved!');

                    //}
                }).error(function (error, status, headers, config) {
                    $scope.message = 'Unexpected Error while saving data!!' + data.errors;
                    console.log(error);
                });

        //}
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
 
                $scope.Item = data;
            }).error(function (error) {
                console.log('error' + error);
            });
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
                },801);
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
        var dialog_noti = confirm("Bạn có muốn xóa");
        if (dialog_noti == true) {
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
                    },801);
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
      
    }

    //$scope.listpost = null;
    //$scope.listImg = null;
    //$scope.getlistPost = function () {
    //    $http.get('/Product/getDetails')
    //        .success(function (data) {
    //            $scope.listpost = data;
    //            $scope.listImg = data.map(x => x.Slides);
    //            for (var i in $scope.listImg) {
    //                console.log($scope.listImg[i]);
    //            }
    //            console.log('success' + data);
    //        }).error(function (error) {
    //            console.log(error);
    //        })
    //}
})
app.directive('ckeditor', function () {
        return {
            require: '?ngModel',
            link: function (scope, element, attrs, ngModel) {
                var ckeditor = CKEDITOR.replace(element[0], {

                });
                if (!ngModel) {
                    return;
                }
                ckeditor.on('instanceReady', function () {
                    ckeditor.setData(ngModel.$viewValue);
                });
                ckeditor.on('pasteState', function () {
                    scope.$apply(function () {
                        ngModel.$setViewValue(ckeditor.getData());
                    });
                });
                ngModel.$render = function (value) {
                    ckeditor.setData(ngModel.$viewValue);
                };
            }
        };
    });


//    directive('ckeditor', function () {
//    return {
//        require: '?ngModel',
//        link: function (scope, element, attrs, ngModel) {
//            var ckeditor = CKEDITOR.replace(element[0], {

//            });
//            if (!ngModel) {
//                return;
//            }
//            ckeditor.on('instanceReady', function () {
//                ckeditor.setData(ngModel.$viewValue);
//            });
//            ckeditor.on('pasteState', function () {
//                scope.$apply(function () {
//                    ngModel.$setViewValue(ckeditor.getData());
//                });
//            });
//            ngModel.$render = function (value) {
//                ckeditor.setData(ngModel.$viewValue);
//            };
//        }
//    };
//});