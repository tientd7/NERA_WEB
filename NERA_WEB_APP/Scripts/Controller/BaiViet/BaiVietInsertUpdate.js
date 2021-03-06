﻿app.controller('BaiVietListController', function ($scope, $http, $location, $window) {
    $scope.custModel = {};
    $scope.message = '';
    $scope.result = "color-default";
    $scope.isViewLoading = false;
    
    getDetail($scope.Post_Id);
    
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


    
});