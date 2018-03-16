app.controller('Post_Slide', function ($scope, $http, $location, $window) {
    var url = $location.absUrl().split('/');
    $scope.Post_Id = url[url.length - 1];
    $scope.message = '';
    $scope.isViewLoading = false;
    $scope.ListBaiViet = null;

    $scope.delete = function (Post_Id) {
        $http({
            method: 'POST',
            url: '/Post_Slide/delete',
            data: Post_Id
        })
             .success(function (data) {
                 console.log(data);
                 $scope.getallData();
             }).error(function (error) {
                 console.log(error);

             })
    };

    getDetailData();

    function getDetailData() {
        $http({
            method: 'GET',
            url: '/Post_Slide/Detail/' + $scope.Post_Id,
        })
            .success(function (data, status, headers, config) {
                //debugger;
                $scope.Item = data;
                console.log(data);
            })
    };

    $scope.Item
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
    


