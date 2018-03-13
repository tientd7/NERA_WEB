angular.module('myFormApp', [])
.controller('BaiVietListController', function ($scope, $http, $location, $window) {
    $scope.custModel = {};
    $scope.message = '';
    $scope.result = "color-default";
    $scope.isViewLoading = false;
    $scope.ListBaiViet = null;
    getallData();

    //******=========Get All BaiViet=========******
    function getallData() {
        //debugger;
        $http.get('/BaiViet/GetAllBaiViet')
            .success(function (data) {
                $scope.ListBaiViet = data;
            })
            .error(function (data) {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
                console.log($scope.message);
            });
    };

    ////******=========Get Single BaiViet=========******
    //$scope.getBaiViet = function (custModel) {
    //    $http.get('/BaiViet/GetbyID/' + custModel.Id)
    //    .success(function (data/*, status, headers, config*/) {
    //        //debugger;
    //        $scope.custModel = data;
    //        getallData();
    //        console.log(data);
    //    })
    //    .error(function (data/*, status, headers, config*/) {
    //        $scope.message = 'Unexpected Error while loading data!!';
    //        $scope.result = "color-red";
    //        console.log($scope.message);
    //    });
    //};

    //******=========Save BaiViet=========******
//    $scope.saveBaiViet = function () {
//        $scope.isViewLoading = true;

//        $http({
//            method: 'POST',
//            url: '/Home/Insert',
//            data: $scope.custModel
//        }).success(function (data, status, headers, config) {
//            if (data.success === true) {
//                $scope.message = 'Form data Saved!';
//                $scope.result = "color-green";
//                getallData();
//                $scope.custModel = {};
//                console.log(data);
//            }
//            else {
//                $scope.message = 'Form data not Saved!';
//                $scope.result = "color-red";
//            }
//        }).error(function (data, status, headers, config) {
//            $scope.message = 'Unexpected Error while saving data!!' + data.errors;
//            $scope.result = "color-red";
//            console.log($scope.message);
//        });
//        getallData();
//        $scope.isViewLoading = false;
//    };

//    //******=========Edit BaiViet=========******
//    $scope.updateBaiViet = function () {
//        //debugger;
//        $scope.isViewLoading = true;
//        $http({
//            method: 'POST',
//            url: '/Home/Update',
//            data: $scope.custModel
//        }).success(function (data, status, headers, config) {
//            if (data.success === true) {
//                $scope.custModel = null;
//                $scope.message = 'Form data Updated!';
//                $scope.result = "color-green";
//                getallData();
//                console.log(data);
//            }
//            else {
//                $scope.message = 'Form data not Updated!';
//                $scope.result = "color-red";
//            }
//        }).error(function (data, status, headers, config) {
//            $scope.message = 'Unexpected Error while updating data!!' + data.errors;
//            $scope.result = "color-red";
//            console.log($scope.message);
//        });
//        $scope.isViewLoading = false;
//    };

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
})
.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});