app.controller("showMenuBarDvController", function ($scope,$http) {

    $scope.ItemDV;

    $scope.showDV = function () {
        $http.get('/Product/showDV').success(function (data, status) {
            $scope.ItemDV = data;
            console.log("success" + data + status);

        }).error(function (error) {
            console.log("error :" + error);
        })
    };
    // chạy hàm
    $scope.showDV();

})