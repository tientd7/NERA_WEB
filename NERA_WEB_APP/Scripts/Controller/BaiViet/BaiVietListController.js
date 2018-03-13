app.controller('BaiVietListController', function ($scope, $http, $location, $window) {
    $scope.custModel = {};
    $scope.message = '';
    $scope.result = "color-default";
    $scope.isViewLoading = false;
    $scope.ListBaiViet = null;
    getallData();
    //if (undefined !== $scope.Item.Post_Id|| $scope.Item.Post_Id >= 0) {
    //    getDetail($scope.Item.Post_Id);
    //}
    //******=========Get All BaiViet=========******
    function getallData() {
        //debugger;
        $http.get('/BaiViet/GetAllBaiViet')
            .success(function (data, status, headers, config) {
                $scope.ListBaiViet = data;
            })
            .error(function (data, status, headers, config) {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
                console.log($scope.message);
            });
    };
    $scope.ReloadData = getallData();
    //******=========Get Single BaiViet=========******
    function getDetail(id) {
        $http.get('/BaiViet/Detail/' + id)
        .success(function (data, status, headers, config) {
            //debugger;
            $scope.Item = data;
            console.log(data);
        })
        .error(function (data/*, status, headers, config*/) {
            $scope.message = 'Unexpected Error while loading data!!';
            $scope.result = "color-red";
            console.log($scope.message);
        });
    };

    //******=========Save BaiViet=========******
    $scope.onSave = function () {
        $scope.isViewLoading = true;
        $http({
            method: 'POST',
            url: '/BaiViet/ConfirmEdit',
            data: $scope.Item
        }).success(function (data, status, headers, config) {
            if (data === "") {
                window.location.href('/BaiViet/Index');
            }
            else {
                $scope.message = 'Form data not Saved!';
                $scope.result = "color-red";
            }
        }).error(function (data, status, headers, config) {
            $scope.message = 'Unexpected Error while saving data!!' + data.errors;
            $scope.result = "color-red";
            console.log($scope.message);
        });
        $scope.isViewLoading = false;
    };


//    //******=========Delete BaiViet=========******
//    $scope.deleteBaiViet = function (custModel) {
//        //debugger;
//        var IsConf = confirm('You are about to delete ' + custModel.CustName + '. Are you sure?');
//        if (IsConf) {
//            $http.delete('/Home/Delete/' + custModel.Id)
//            .success(function (data, status, headers, config) {
//                if (data.success === true) {
//                    $scope.message = custModel.CustName + ' deleted from record!!';
//                    $scope.result = "color-green";
//                    getallData();
//                    console.log(data);
//                }
//                else {
//                    $scope.message = 'Error on deleting Record!';
//                    $scope.result = "color-red";
//                }
//            })
//            .error(function (data, status, headers, config) {
//                $scope.message = 'Unexpected Error while deleting data!!';
//                $scope.result = "color-red";
//                console.log($scope.message);
//            });
//        }
//    };
});