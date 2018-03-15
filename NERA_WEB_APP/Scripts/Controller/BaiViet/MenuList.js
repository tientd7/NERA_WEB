﻿app.controller('MenuList', function ($scope, $http, $location, $window) {
    $scope.custModel = {};
    $scope.message = '';
    $scope.result = "color-default";
    $scope.isViewLoading = false;
    $scope.ListBaiViet = null;
    

    $scope.getallData = function () {
        //debugger;
        $http.get('/Menu/GetAllMenu')
            .success(function (data, status, headers, config) {
                $scope.ListBaiViet = data;
                console.log(ListBaiViet);
            })
            .error(function (error) {
                $scope.message = 'Unexpected Error while loading data!!';
                $scope.result = "color-red";
                console.log(error);
            });
    };
    $scope.Create = function () {
      //  $scope.isViewLoading = true;
        $http({
            method: 'POST',
            url: '/Menu/CreatMenu',
            data: $scope.Item
        }).success(function (data, status, headers, config) {
            if (data != "") {
                $scope.message="Thêm Thành Công"
                window.location.href = '/Menu/Index';

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
    $scope.delete = function (Item_Id) {
        $http({
            method: 'POST',
            url: '/Menu/delete',
            data: Item_Id
        })
             .success(function (data) {
                 console.log(data);
                 $scope.getallData();
             }).error(function (error) {
                 console.log(error);

             })
    };
    $scope.getDetail= function () {
        $http.get('/Menu/Detail/')
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
    
});


    