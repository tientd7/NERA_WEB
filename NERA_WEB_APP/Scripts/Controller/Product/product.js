﻿app.controller("ProductCtrl", function ($scope, $http) {

    // tạo biến item sản phẩm
    $scope.ItemSP;

    //tạo biến item dv
    $scope.ItemDV;

    // hàm gọi lấy danh sách sản phẩm
    $scope.hienthisanpham = function () {
        $http.get('/Product/hienthisanpham').success(function (data, status) {
            $scope.ItemSP = data;
            console.log("success" + data + status);
            for (var i = 0; i < $scope.Item.length; i++) {
                console.log(i);
            }
        }).error(function (error) {
            console.log("error :" + error);
        })
    };

    // chạy hàm
    $scope.hienthisanpham();

    // hàm gọi lấy danh sách dich vụ
    $scope.showDV = function () {
        $http.get('/Product/showDV').success(function (data, status) {
            $scope.ItemDV = data;
            console.log("success" + data + status);
            
        }).error(function (error,status) {
            console.log("error :" + error + status);
        })
    };
    // chạy hàm
    //$scope.showDV();


    $scope.Item;
    $scope.Create = function () {

        $http({
            method: 'POST',
            url: '/Product/addNewProduct',
            data: $scope.Item
        }).success(function (data, status, headers, config) {
            if (data != "") {
                console.log("Thêm Thành Công");
                window.location.href = '/Product/product';

            }
            else {
                console.log('Form data not Saved!');

            }
        }).error(function (data, status, headers, config) {
            $scope.message = 'Unexpected Error while saving data!!' + data.errors;
            console.log($scope.message);
        });

    }
    $scope.Delete = function (Item) {
        $http({
            method: "Post",
            url: '/Product/delete',
            data: { 'Id': Item.Item_Id }
        }).success(function () {
            $scope.showSP();
            $scope.showDV();
            console.log('delete success');
        }).error(function (error) {
            console.log(error);
        })
    }
})

