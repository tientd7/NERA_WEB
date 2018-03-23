app.controller('Post_Slide', function ($scope, $http, $location, $window) {
    var url = $location.absUrl().split('/');
    $scope.Post_Id = url[url.length - 1];
    $scope.message = '';
    $scope.isViewLoading = false;
    $scope.ListBaiViet = null;
    $scope.Item = null;


    

    $scope.onSave = function () {
        $http({
            url: '/Post_Slide/Edit',
            method: 'POST',
            data: $scope.Item
        }).success(function (data, status, headers, config) {
            console.log("success" + data + "status" + status);
            if (data != "") {
                window.location.href('/Post_Slide/Index');
            }
            else {
                $scope.message = 'Form data not Saved!';
            }
        })
    };
});
    


