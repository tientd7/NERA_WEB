app.controller("Orther_Slide", function ($scope, $http) {
    $scope.CreateItem = {};
    $scope.Image_URL = '/Content/images/no-image-available.png';
    $scope.List = "";
    this.IsEditing = false;
    this.EditId = -1;
    getAllDataSlide();
    function clearAllControl() {
        $scope.CreateItem = {};
    }
    $scope.onSelectImg = function (id) {
        var finder = new CKFinder();

        finder.selectActionFunction = function (url) {
            $scope.Image_URL = url;
        };
        finder.popup();
    }
    $scope.onCreateSlide = function (Item) {
        var obj = {
            Tbl_Id: 0,
            Image_Title: $scope.CreateItem.Image_Title,
            Image_URL: $scope.Image_URL,
            Image_Link: $scope.CreateItem.Image_Link,
            Image_Orde: $scope.CreateItem.Image_Orde,
            Enable: $scope.CreateItem.Enable,
            Slide_Type: $scope.CreateItem.Slide_Type,
            Language: $scope.CreateItem.Language
        };
        var config = {
            item: Item
        };
        $http.post('/Orther_Slide/Insert', config).then(function (data) {
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
           
                $scope.showDV();

            }, 1500);
            $scope.CreateItem.Image_URL = '~/Content/images/no-image-available.png';
            getAllDataSlide();
        }, function (error) {
            console.log(error);
        });
        clearAllControl();
    };

    $scope.onEditSlide = function (id) {
        this.EditId = id;
        this.IsEditing = true;
    };

    $scope.onCancelSlide = function () {
        var ok = confirm("Bạn có muốn hủy thêm thông tin này?");
        if (ok == true) {
            this.IsEditing = false;
        }

    };

    $scope.onDeleteSlide = function (id) {
        var ok = confirm("Bạn có muốn xóa thông tin này?");
        var config = {
            Delete_Id: id
        };
        if (ok == true) {
            $http.post('/Orther_Slide/Delete', config)
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
                    getAllDataSlide();
                })
                .error(function (error) {
                    console.log(error);
                });
        }

    };

    $scope.onSaveSlide = function (item) {
        //var obj = {
        //    Tbl_Id: item.Tbl_Id,
        //    Image_Title: item.Image_Title,
        //    Image_URL: item.Image_URL,
        //    Image_Link: item.Image_Link,
        //    Image_Orde: item.Image_Orde,
        //    Enable: item.Enable,
        //    Slide_Type: item.Slide_Type,
        //    Language: item.Language
        //};
        //var config = {
        //    params: { Slide: item }
        //};
        var config = {
            Slide: item
        };
        $http.post('/Orther_Slide/Update', config)
            .then(function (data, status, headers, config) {
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
                getAllDataSlide();
            },
            function (error) {
                console.log(error);
            });
    };

    $scope.getStatusSlide = function (id) {
        if (this.IsEditing)
            if (this.EditId === id)
                return false;
        return true;
    };
    function getAllDataSlide() {
        $http.get('/Orther_Slide/GetData')
            .success(function (data) {
                $scope.ListSlide = data;
            })
            .error(function (error) {
                console.log(error)
            });
    };

});