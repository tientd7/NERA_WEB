app.controller('PostSlide', function ($Scope, $http) {
    $scope.message = '';
    $Scope.listSlide = null;
    $scope.isViewLoading = false;

    $scope.Create = function () {
        $http({
            method: 'POST',
            url: '/Post_Slide/ThemSlide',
            data: $scope.Item
        }).success(function (data, status, headers, config) {
            if (data != "") {
                $scope.message = "Thêm Thành Công"
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
