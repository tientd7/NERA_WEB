﻿app.controller('Post_SlideCtr', function($scope,$http){
    $scope.message = '';
    $scope.listSlide = null;
    $scope.data;
    console.log('sdfdsf');

    $scope.Create = function () {
       
        $http({
            method: 'POST',
            url: '/Post_Slide/CreateSlide',
            data: $scope.Item
        }).success(function (data, status, headers, config) {
            if (data != "") {
                $scope.message="Thêm Thành Công"
                window.location.href = '/Post_Slide/Index';

            }
            else {
                $scope.message = 'Form data not Saved!';        
            }
        }).error(function (data, status, headers, config) {
            $scope.message = 'Unexpected Error while saving data!!' + data.errors;
            console.log($scope.message);
        });
        $scope.isViewLoading = false;


    };

});